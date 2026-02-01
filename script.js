// ====================================
// CONFIGURATION
// ====================================
const RELEASE_DATE = new Date('2027-04-07T00:00:00+05:30'); // IST timezone
const YOUTUBE_TRAILER_ID = 'jDGETw3YAHc'; // YouTube video ID
const BACKGROUND_VIDEO_START_TIME = 150; // 2:30 in seconds

// ====================================
// HERO VIDEO BACKGROUND
// ====================================
let videoStarted = false;
let videoEnded = false;
let isUnmuted = false;
let heroPlayer = null;

function initHeroVideo() {
    const videoContainer = document.getElementById('hero-video-container');
    const bgImage = document.getElementById('hero-bg-image');
    const videoIframe = document.getElementById('hero-video-player');
    
    if (!videoIframe || !videoContainer || !bgImage) return;
    
    // Show video container immediately
    videoContainer.classList.add('playing');
    bgImage.classList.add('hidden');
    videoStarted = true;
    
    // Add click listener to unmute
    addUnmuteOnClick();
    
    // Show unmute hint
    showUnmuteHint();
    
    // Estimated video duration from 2:30 to end (~1 minute)
    setTimeout(() => {
        if (!videoEnded) {
            videoEnded = true;
            showBackgroundImage();
        }
    }, 65000);
}

// YouTube API callback
function onYouTubeIframeAPIReady() {
    heroPlayer = new YT.Player('hero-video-player', {
        events: {
            'onReady': onHeroPlayerReady,
            'onStateChange': onHeroPlayerStateChange
        }
    });
}

function onHeroPlayerReady(event) {
    // Player is ready
    console.log('YouTube player ready');
}

function onHeroPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED && !videoEnded) {
        videoEnded = true;
        showBackgroundImage();
    }
}

function addUnmuteOnClick() {
    const unmuteHandler = () => {
        if (heroPlayer && !isUnmuted) {
            try {
                heroPlayer.unMute();
                heroPlayer.setVolume(50);
                isUnmuted = true;
                
                // Remove hint
                const hint = document.getElementById('unmute-hint');
                if (hint) {
                    hint.classList.add('hidden');
                    setTimeout(() => hint.remove(), 500);
                }
            } catch (e) {
                console.log('Could not unmute:', e);
            }
        }
    };
    
    // Listen for any interaction to unmute
    document.addEventListener('click', unmuteHandler, { once: true });
    document.addEventListener('touchstart', unmuteHandler, { once: true });
    document.addEventListener('keydown', unmuteHandler, { once: true });
}

function showUnmuteHint() {
    if (document.getElementById('unmute-hint')) return;
    
    const hint = document.createElement('div');
    hint.id = 'unmute-hint';
    hint.className = 'unmute-hint';
    hint.innerHTML = '<span class="unmute-icon">🔊</span> Click anywhere for sound';
    document.body.appendChild(hint);
    
    setTimeout(() => hint.classList.add('visible'), 500);
    
    // Auto-hide after 6 seconds
    setTimeout(() => {
        if (hint && hint.parentNode && !isUnmuted) {
            hint.classList.remove('visible');
            setTimeout(() => {
                if (hint && hint.parentNode) hint.remove();
            }, 500);
        }
    }, 6000);
}

function showBackgroundImage() {
    const videoContainer = document.getElementById('hero-video-container');
    const bgImage = document.getElementById('hero-bg-image');
    
    if (videoContainer && bgImage) {
        videoContainer.classList.remove('playing');
        bgImage.classList.remove('hidden');
    }
    
    const hint = document.getElementById('unmute-hint');
    if (hint) hint.remove();
}

// Make function globally available for YouTube API
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

// ====================================
// COUNTDOWN TIMER WITH SMOOTH ANIMATIONS
// ====================================
let previousValues = { days: null, hours: null, minutes: null, seconds: null };

function animateValue(element, newValue) {
    if (!element) return;
    
    const currentValue = element.textContent;
    if (currentValue !== newValue) {
        element.style.transform = 'translateY(-10px)';
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'translateY(10px)';
            
            requestAnimationFrame(() => {
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
            });
        }, 150);
    }
}

function updateCountdown() {
    const now = new Date();
    const timeRemaining = RELEASE_DATE - now;

    // Check if release date has passed
    if (timeRemaining <= 0) {
        showNowPlaying();
        return;
    }

    // Calculate time units
    const days = String(Math.floor(timeRemaining / (1000 * 60 * 60 * 24))).padStart(3, '0');
    const hours = String(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, '0');

    // Animate only changed values
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (previousValues.days !== days) animateValue(daysEl, days);
    if (previousValues.hours !== hours) animateValue(hoursEl, hours);
    if (previousValues.minutes !== minutes) animateValue(minutesEl, minutes);
    if (previousValues.seconds !== seconds) animateValue(secondsEl, seconds);

    previousValues = { days, hours, minutes, seconds };
}

// ====================================
// NOW PLAYING STATE
// ====================================
function showNowPlaying() {
    const countdownContainer = document.getElementById('countdown-container');
    const nowPlaying = document.getElementById('now-playing');
    const heroActions = document.querySelector('.hero-actions');
    
    if (countdownContainer && nowPlaying && heroActions) {
        countdownContainer.style.display = 'none';
        heroActions.style.display = 'none';
        nowPlaying.style.display = 'block';
    }
}

// ====================================
// TRAILER MODAL
// ====================================
function initTrailerModal() {
    const trailerBtn = document.getElementById('trailer-btn');
    const navWatchBtn = document.querySelector('.nav-watch-btn');
    const modal = document.getElementById('trailer-modal');
    const closeBtn = document.getElementById('close-modal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const trailerVideo = document.getElementById('trailer-video');

    // Check if trailer ID exists
    if (!YOUTUBE_TRAILER_ID) {
        trailerBtn.classList.add('is-disabled');
        trailerBtn.setAttribute('disabled', 'true');
        trailerBtn.setAttribute('aria-disabled', 'true');
        trailerBtn.querySelector('span:last-child').textContent = 'TEASER COMING SOON';
        
        navWatchBtn.style.opacity = '0.5';
        navWatchBtn.style.cursor = 'not-allowed';
        navWatchBtn.setAttribute('disabled', 'true');
        return;
    }

    // Open modal function
    function openModal() {
        modal.classList.add('active');
        trailerVideo.src = `https://www.youtube.com/embed/${YOUTUBE_TRAILER_ID}?autoplay=1&rel=0`;
        document.body.style.overflow = 'hidden';
    }

    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        trailerVideo.src = ''; // Stop video
        document.body.style.overflow = 'auto';
    }

    // Event listeners
    trailerBtn.addEventListener('click', openModal);
    navWatchBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ====================================
// REMINDER FUNCTIONALITY
// ====================================
function initReminder() {
    const reminderBtn = document.getElementById('reminder-btn');
    
    reminderBtn.addEventListener('click', () => {
        // Create calendar event data
        const title = 'VARANASI - Movie Release';
        const details = 'VARANASI releases in theaters worldwide!';
        const location = 'Theaters Worldwide';
        const startDate = '20270407T000000';
        const endDate = '20270407T235959';
        
        // Generate Google Calendar URL
        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&dates=${startDate}/${endDate}`;
        
        // Open in new window
        window.open(googleCalendarUrl, '_blank');
    });
}

// ====================================
// SMOOTH SCROLL
// ====================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ====================================
// SCROLL ANIMATIONS
// ====================================
function initScrollAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        return;
    }

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe story cards
    const storyCards = document.querySelectorAll('.story-card');
    storyCards.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = `opacity 0.8s ease-out ${index * 0.15}s, transform 0.8s ease-out ${index * 0.15}s`;
        observer.observe(el);
    });
    
    // Observe crew items with staggered animation
    const crewItems = document.querySelectorAll('.crew-item');
    crewItems.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease-out ${(index % 4) * 0.1}s, transform 0.6s ease-out ${(index % 4) * 0.1}s`;
        observer.observe(el);
    });
    
    // Observe section headings
    const headings = document.querySelectorAll('.section-heading, .crew-category');
    headings.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Fade scroll indicator on scroll
    window.addEventListener('scroll', () => {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            const opacity = Math.max(0, 1 - window.pageYOffset / 500);
            scrollIndicator.style.opacity = opacity;
        }
    });
}

// ====================================
// PARALLAX EFFECT FOR HERO
// ====================================
function initParallax() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const heroBackground = document.querySelector('.hero-background');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = window.innerHeight;
        
        if (scrolled < heroHeight) {
            if (heroBackground) {
                heroBackground.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
            if (heroContent) {
                heroContent.style.opacity = 1 - (scrolled / heroHeight) * 1.2;
            }
        }
    });
}

// ====================================
// LOADING SCREEN WITH PARTICLES
// ====================================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const particleContainer = document.getElementById('particles');
    
    if (!loadingScreen) return;
    
    document.body.classList.add('loading');
    
    // Create floating particles
    if (particleContainer) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = (2 + Math.random() * 2) + 's';
            particleContainer.appendChild(particle);
        }
    }
    
    // Use requestAnimationFrame for smoother transition
    requestAnimationFrame(() => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            document.body.classList.remove('loading');
            document.body.style.overflow = ''; // Ensure overflow is reset
            
            setTimeout(() => {
                if (loadingScreen && loadingScreen.parentNode) {
                    loadingScreen.remove();
                }
            }, 600);
        }, 2000);
    });
}

// ====================================
// CURSOR GLOW EFFECT
// ====================================
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursor-glow');
    if (!cursorGlow) return;
    
    // Check if device supports hover
    if (window.matchMedia('(hover: none)').matches) return;
    
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorGlow.classList.add('active');
    });
    
    document.addEventListener('mouseleave', () => {
        cursorGlow.classList.remove('active');
    });
    
    // Smooth follow animation
    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
        
        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}

// ====================================
// SCROLL PROGRESS BAR
// ====================================
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ====================================
// BACK TO TOP BUTTON
// ====================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ====================================
// KEYBOARD SHORTCUTS
// ====================================
function initKeyboardShortcuts() {
    const modal = document.getElementById('trailer-modal');
    
    document.addEventListener('keydown', (e) => {
        // Space or Enter to open trailer (when not in modal)
        if ((e.key === ' ' || e.key === 'Enter') && !modal.classList.contains('active')) {
            const trailerBtn = document.getElementById('trailer-btn');
            if (trailerBtn && !trailerBtn.hasAttribute('disabled')) {
                e.preventDefault();
                trailerBtn.click();
            }
        }
    });
}

// ====================================
// INITIALIZE ON DOM LOAD
// ====================================
document.addEventListener('DOMContentLoaded', () => {
    // Loading screen
    initLoadingScreen();
    
    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Initialize features
    initHeroVideo();
    initTrailerModal();
    initReminder();
    initSmoothScroll();
    initScrollAnimations();
    initScrollProgress();
    initBackToTop();
    initKeyboardShortcuts();
    initCursorGlow();
    initParallax();
});
