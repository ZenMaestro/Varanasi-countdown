# 🎬 VARANASI (2027) — Countdown Website

**Release Date:** 7 April 2027  
**Status:** Professional MVP Complete ✅

## 🌟 Features

✨ **Live Countdown Timer** — IST-safe countdown to April 7, 2027  
🎥 **YouTube Trailer Modal** — Professional modal with nav integration  
📅 **Add Reminder** — Google Calendar integration for release date  
🎨 **Dark Premium Design** — Refined typography and muted gold palette  
📱 **Fully Responsive** — Desktop, tablet, and mobile optimized  
⚡ **Release Day Switch** — Auto-switches to "NOW PLAYING" on April 7, 2027  
🏷️ **Countdown Badge** — "COUNTDOWN ACTIVE" status indicator  
🖼️ **Story Cards** — Elegant image cards with hover effects

## 🚀 Quick Start

### Option 1: Open Directly
1. Open `index.html` in your browser
2. Done! The site works without a server.

### Option 2: Live Server (Recommended)
1. Install VS Code extension: [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → **"Open with Live Server"**
3. Automatically opens at `http://localhost:5500`

### Option 3: Python Server
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

## ⚙️ Configuration

### Change YouTube Trailer
Open `script.js` and edit line 5:
```javascript
const YOUTUBE_TRAILER_ID = 'YOUR_VIDEO_ID'; // Replace with your YouTube ID
```

Example: For `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, use `dQw4w9WgXcQ`

### Adjust Release Date
Open `script.js` and edit line 4:
```javascript
const RELEASE_DATE = new Date('2027-04-07T00:00:00+05:30'); // IST timezone
```

## 📂 File Structure

```
Varanasi/
├── index.html          # Main HTML structure
├── styles.css          # Professional dark theme styling
├── script.js           # Countdown, modal, and reminder logic
├── image 1.jpg         # Hero background (Desktop)
├── image 2.png         # Hero background (Mobile)
├── image 3.jpg         # Story card 1 (The Eternal City)
├── image 4.jpg         # Story card 2 (The Prophecy)
└── README.md           # This file
```

## 🎨 Design System

### Colors
- **Gold**: `#C9A961` — Primary brand (muted professional)
- **Dark BG**: `#0D0D0D` — Main background
- **Card BG**: `#1A1A1A` — Countdown/card backgrounds
- **Text Primary**: `#FFFFFF` — Main text
- **Text Secondary**: `#B3B3B3` — Subtle text
- **Text Muted**: `#666666` — Labels

### Fonts
- **Display**: Cinzel (Clean serif for titles)
- **Body**: Rajdhani (Modern sans-serif)

### Design Philosophy
- **Dark & Premium** — Netflix/Apple-inspired aesthetic
- **Minimal Glow** — Subtle effects, no excessive shine
- **Readable Typography** — Professional letter-spacing
- **Glass Morphism** — Semi-transparent cards with blur

## 🎯 Component Breakdown

| Component | Purpose | Location |
|-----------|---------|----------|
| **Navigation** | Fixed top bar with logo and WATCH button | Top of page |
| **Hero Section** | Main countdown with title and CTAs | Above the fold |
| **Countdown Cards** | 4 glass-morphism boxes (Days/Hours/Mins/Secs) | Hero center |
| **Action Buttons** | WATCH TEASER + ADD REMINDER + COUNTDOWN ACTIVE badge | Below countdown |
| **Story Cards** | 2 hover-activated image cards | Below hero |
| **Trailer Modal** | Full-screen YouTube embed | Triggered by buttons |

## 🔧 Key Features Explained

### Navigation
- Fixed at top with fade-out gradient
- Logo on left, WATCH button on right
- Minimal, doesn't obstruct content

### Countdown Timer
- **Left-aligned** text block with metadata
- **Glass-morphism cards** with subtle borders
- **Auto-updates** every second
- **Smooth hover** states on cards

### COUNTDOWN ACTIVE Badge
- Matches reference design
- Bordered pill shape
- Gold accent color

### ADD REMINDER Button
- Opens Google Calendar with pre-filled event
- One-click reminder setup
- Secondary button styling

### Story Cards
- Uses `image 3.jpg` and `image 4.jpg`
- Hover zoom effect on images
- Bottom-aligned text overlays
- Responsive grid layout

## 📱 Mobile Optimizations

- Switches to `image 2.png` for hero on mobile
- Centered layout on smaller screens
- Stacked countdown cards
- Full-width buttons
- Reduced padding for content
- Touch-friendly targets (min 44px)

## 🌐 Browser Support

✅ Chrome/Edge (recommended)  
✅ Firefox  
✅ Safari  
✅ Mobile browsers (iOS/Android)

## 🚫 NOT Included (Phase 2)

❌ Backend/database  
❌ User accounts  
❌ Music autoplay  
❌ Analytics tracking  
❌ Email capture form

## 📝 Customization Guide

### Change Tagline
Edit line 15 in `index.html`:
```html
<div class="subtitle">YOUR NEW TAGLINE</div>
```

### Update Story Card Titles
Edit lines 48-49 and 54-55 in `index.html`:
```html
<h2 class="story-title">YOUR TITLE</h2>
<p class="story-text">Your description</p>
```

### Modify Social Links
Edit lines 67-69 in `index.html`:
```html
<a href="https://instagram.com/yourpage" class="social-link">Instagram</a>
```

### Adjust Color Scheme
Edit CSS variables in `styles.css` (lines 11-18):
```css
:root {
    --color-gold: #C9A961;
    --color-bg-dark: #0D0D0D;
    /* etc... */
}
```

## 🌍 Deployment (Free Options)

### Netlify (Easiest)
1. Drag & drop entire folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Done! Get instant URL

### GitHub Pages
1. Push to GitHub repo
2. Settings → Pages → Deploy from `main` branch
3. Site live at `username.github.io/varanasi`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project folder
3. Follow prompts

## 🎯 Design Reference

This design is inspired by professional movie countdown sites with:
- **Dark, premium aesthetic** (vs bright/flashy)
- **Left-aligned content** (vs centered)
- **Subtle gold accents** (vs vibrant fire colors)
- **Clean typography** (vs heavy glow effects)
- **Glass-morphism UI** (vs solid backgrounds)

Think: Netflix, Apple TV+, A24 Films

## 📧 Credits

Built with ❤️ for **VARANASI (2027)**  
Design inspired by premium streaming platforms

---

**Ready to deploy?** Update the YouTube trailer ID and go live! 🚀

## 🚀 Quick Start

### Option 1: Open Directly
1. Open `index.html` in your browser
2. Done! The site works without a server.

### Option 2: Live Server (Recommended)
1. Install VS Code extension: [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → **"Open with Live Server"**
3. Automatically opens at `http://localhost:5500`

### Option 3: Python Server
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

## ⚙️ Configuration

### Change YouTube Trailer
Open `script.js` and edit line 5:
```javascript
const YOUTUBE_TRAILER_ID = 'YOUR_VIDEO_ID'; // Replace with your YouTube ID
```

Example: For `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, use `dQw4w9WgXcQ`

### Adjust Release Date
Open `script.js` and edit line 4:
```javascript
const RELEASE_DATE = new Date('2027-04-07T00:00:00+05:30'); // IST timezone
```

## 📂 File Structure

```
Varanasi/
├── index.html          # Main HTML structure
├── styles.css          # All styling & animations
├── script.js           # Countdown logic & interactivity
├── image 1.jpg         # Hero background (Desktop)
├── image 2.png         # Hero background (Mobile)
├── image 3.jpg         # Cinematic divider section
├── image 4.jpg         # Parallax section
└── README.md           # This file
```

## 🎨 Design System

### Colors
- **Gold**: `#D4AF37` — Primary brand color
- **Fire**: `#FF6B35` — Accent & energy
- **Dark**: `#0A0A0A` — Background base
- **Glow**: `#FFD700` — Highlights & emphasis

### Fonts
- **Display**: Cinzel (Titles & headings)
- **Body**: Rajdhani (Countdown & text)

### Responsive Breakpoints
- **Desktop**: > 768px (Uses `image 1.jpg`)
- **Mobile**: ≤ 768px (Uses `image 2.png`)

## 🎯 Image Usage

| Image | Usage | Section |
|-------|-------|---------|
| `image 1.jpg` | Hero background (Desktop) | Above-the-fold countdown |
| `image 2.png` | Hero background (Mobile) | Mobile fallback |
| `image 3.jpg` | Battle scene divider | Epic quote section |
| `image 4.jpg` | Parallax background | "The Prophecy Unfolds" |

## 🔧 Customization Guide

### Change Tagline
Edit line 22 in `index.html`:
```html
<div class="subtitle">YOUR NEW TAGLINE</div>
```

### Modify Quote
Edit lines 70-72 in `index.html`:
```html
<blockquote class="epic-quote">
    "Your custom epic quote here."
</blockquote>
```

### Update Social Links
Edit lines 95-98 in `index.html`:
```html
<a href="https://instagram.com/yourpage" class="social-link">Instagram</a>
```

## 🌐 Browser Support

✅ Chrome/Edge (recommended)  
✅ Firefox  
✅ Safari  
✅ Mobile browsers

## 🎭 Special Features

### Auto Release-Day Switch
On April 7, 2027, the countdown automatically hides and displays:
```
🔥 NOW PLAYING 🔥
IN THEATERS WORLDWIDE
```

### Performance Optimizations
- Respects `prefers-reduced-motion`
- Parallax disabled on mobile (performance)
- Lazy-loaded YouTube iframe
- Smooth scroll animations

### Easter Egg 🥚
Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A

## 📱 Mobile Optimizations

- Switched to `image 2.png` for hero
- Disabled parallax (scroll performance)
- Stacked countdown units
- Larger touch targets
- Reduced animation complexity

## 🚫 NOT Included (Phase 2)

❌ Backend/database  
❌ User accounts  
❌ Music autoplay  
❌ Analytics  
❌ Email signup

## 📝 Next Steps

1. **Replace YouTube ID** in `script.js`
2. **Test on mobile devices**
3. **Deploy to hosting** (Netlify/Vercel/GitHub Pages)
4. **Share the link!**

## 🌍 Deployment (Free Options)

### Netlify (Easiest)
1. Drag & drop entire folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Done! Get instant URL

### GitHub Pages
1. Push to GitHub repo
2. Settings → Pages → Deploy from `main` branch
3. Site live at `username.github.io/varanasi`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project folder
3. Follow prompts

## 📧 Credits

Built with ❤️ for **VARANASI (2027)**  
Inspired by Marvel's Avengers countdown aesthetic

---

**Ready to deploy?** Just update the YouTube trailer ID and go live! 🚀
