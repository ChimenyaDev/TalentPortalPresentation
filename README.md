# KZN Talent Portal - Project Presentation Website

A professional, browser-based presentation website for the KZN Talent Portal project by InnovateKZN Collective.

## 📋 Overview

This is a fully functional, interactive presentation website that walks through the KZN Talent Portal project. It features:

- **21 Interactive Slides** with smooth navigation
- **Responsive Design** that works on desktop, tablet, and mobile
- **Keyboard Navigation** for professional presentation control
- **Modern UI/UX** matching the TalentPortal brand colors
- **No Dependencies** - runs entirely in the browser

## 🚀 Quick Start

### Option 1: Open Locally (Simplest)

1. **Download all files** to a folder on your computer
2. **Double-click `index.html`** to open in your default browser
3. Navigate using the on-screen buttons or keyboard shortcuts

### Option 2: Run with Local Server (Recommended)

For the best experience, run a local web server:

**Using Python (if installed):**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (if installed):**
```bash
npx http-server -p 8000
```

**Using PHP (if installed):**
```bash
php -S localhost:8000
```

Then open your browser to: `http://localhost:8000`

### Option 3: Deploy Online (For Sharing)

#### Deploy to GitHub Pages (Free)

1. Create a new GitHub repository
2. Upload all presentation files
3. Go to Settings → Pages
4. Select "main" branch as source
5. Your presentation will be available at: `https://[username].github.io/[repo-name]`

#### Deploy to Netlify (Free)

1. Go to [netlify.com](https://www.netlify.com)
2. Drag and drop your presentation folder
3. Get instant live URL
4. Optional: Add custom domain

#### Deploy to Vercel (Free)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your presentation folder
3. Follow prompts to deploy
4. Get instant live URL

## 📁 File Structure

```
kzn-talent-portal-presentation/
│
├── index.html                 # Cover page (Slide 1)
├── table-of-contents.html     # Navigation page (Slide 2)
├── slide-03.html              # Meet InnovateKZN Collective
├── slide-04.html              # Problem Statement
├── slide-05.html              # Our Solution
├── slide-06.html              # How It Works
├── slide-07.html              # Technology Stack
├── slide-08.html              # Skills Development
├── slide-09.html              # Project Participation & Income
├── slide-10.html              # Career Pathway
├── slide-11.html              # Innovation Funding
├── slide-12.html              # PPP Model
├── slide-13.html              # Stakeholder Benefits
├── slide-14.html              # Competitive Advantages
├── slide-15.html              # Implementation Roadmap
├── slide-16.html              # Success Metrics & KPIs
├── slide-17.html              # Risk Mitigation
├── slide-18.html              # Expected Impact
├── slide-19.html              # Call to Action
├── slide-20.html              # Conclusion
├── slide-21.html              # Q&A
│
├── styles.css                 # Main stylesheet
├── styles-extended.css        # Extended styles for additional slides
├── script.js                  # Interactive JavaScript
│
├── logo.png                   # InnovateKZN Collective logo
├── README.md                  # This file
└── deploy.sh                  # Deployment helper script (optional)
```

## ⌨️ Keyboard Shortcuts

- **→ Arrow Right** or **Space** or **Page Down**: Next slide
- **← Arrow Left** or **Page Up**: Previous slide
- **Home**: Go to cover page
- **T**: Go to table of contents
- **Esc**: (Can be customized for fullscreen toggle)

## 🎨 Customization

### Update Team Members

Edit `index.html` and replace the placeholder team members:

```html
<ul>
    <li>ChimenyaDev - Lead Developer</li>
    <li>[Your Name] - [Your Role]</li>
    <!-- Add more team members -->
</ul>
```

### Change Colors

Edit `styles.css` and modify the CSS variables:

```css
:root {
    --primary-blue: #1B4E89;
    --secondary-teal: #00A99D;
    --accent-gold: #F5A623;
    /* ... modify as needed ... */
}
```

### Add Your Logo

Replace `logo.png` with your actual logo file. Recommended specs:
- **Format**: PNG with transparent background
- **Size**: 300-500px width
- **Aspect Ratio**: Square or slightly wider

## 🌐 Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

## 📱 Mobile Support

The presentation is fully responsive and works on:
- 📱 Smartphones (iOS & Android)
- 📱 Tablets (iPad, Android tablets)
- 💻 Laptops & Desktops
- 🖥️ Large displays and projectors

## 🎯 Presentation Tips

### For Live Presentations

1. **Test your setup** before the presentation
2. **Use fullscreen mode** (F11 in most browsers)
3. **Have backup** - PDF export or offline copy
4. **Practice navigation** with keyboard shortcuts
5. **Check display resolution** on the projector

### For Remote/Recorded Presentations

1. **Use screen recording software** (OBS, Loom, etc.)
2. **Zoom in if needed** (Ctrl/Cmd + Plus)
3. **Enable browser's reading mode** for distraction-free view
4. **Use presenter notes** from the original Markdown file

## 🔧 Troubleshooting

### Images not loading?
- Ensure `logo.png` is in the same folder as HTML files
- Check file name matches exactly (case-sensitive on some systems)

### Styles not applying?
- Make sure `styles.css` and `styles-extended.css` are in the root folder
- Check browser console for any errors (F12)

### Navigation not working?
- Ensure `script.js` is in the root folder
- Check that JavaScript is enabled in your browser

### Fonts not displaying correctly?
- Requires internet connection for Google Fonts
- Fallback fonts (system fonts) will be used if offline

## 📤 Sharing Your Presentation

### Generate PDF (for backup)

1. Open presentation in Chrome/Edge
2. Print (Ctrl/Cmd + P)
3. Select "Save as PDF"
4. Save each slide individually or use browser extensions

### Share as Link

Deploy to any of these platforms (all free):
- **GitHub Pages**: Best for version control
- **Netlify**: Best for quick deployment
- **Vercel**: Best for developers
- **Surge.sh**: Best for simplicity

### Share as Zip

1. Compress all files into a .zip
2. Share via email/cloud storage
3. Recipient extracts and opens `index.html`

## 🤝 Contributing

To add more slides or modify existing ones:

1. Follow the existing HTML structure
2. Use consistent naming: `slide-XX.html`
3. Update `table-of-contents.html` with new links
4. Update slide indicators
5. Test navigation flow

## 📝 License

This presentation template is created for InnovateKZN Collective for the KZN Talent Portal project.

## 👥 Credits

**Developed by**: InnovateKZN Collective  
**Project**: KZN Talent Portal  
**Lead Developer**: ChimenyaDev  
**Date**: October 23, 2025

## 📞 Support

For questions or issues with this presentation:
- Open an issue on GitHub
- Contact the team at: [your-email@example.com]

---

## 🎓 For Your Professor

Dear Professor,

This presentation can be:
- **Viewed online** at: [Insert your deployed URL]
- **Run locally** by opening `index.html`
- **Navigated** using arrow keys or on-screen buttons
- **Accessed** on any device with a modern web browser

Thank you for your time and consideration.

— InnovateKZN Collective