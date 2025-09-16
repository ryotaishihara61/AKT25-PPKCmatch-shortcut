# Cambodia Team - ASEAN Kendo Tournament 2025

This website showcases the Cambodia Kendo Team's participation in the ASEAN Kendo Tournament 2025, featuring individual and team match videos.

## Features

- **Bilingual Support**: English and Khmer language switching
- **Elegant Design**: Clean, martial arts-inspired design with Cambodia's red and blue colors
- **Video Integration**: YouTube embedded videos for each player and team matches
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Official Links**: Direct links to tournament and club websites

## Setup Instructions

1. **Update Video Data**:
   - Open `AKT_youtube-shortcuts.xlsx` to get the YouTube links
   - Update the video IDs in `script.js` in the `playersData` array
   - Update the team video ID in the `teamYoutubeId` variable

2. **Verify Photos**:
   - Ensure all player photos are in the root directory
   - Photos should match the filenames in the `playersData` array

3. **Local Development**:
   ```bash
   # Using Python
   python -m http.server 3000

   # Or using Node.js (if you have live-server installed)
   npx live-server --port=3000
   ```

4. **Deploy to Vercel**:
   ```bash
   npm install -g vercel
   vercel
   ```

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript for language switching and video loading
├── data.js             # Video data configuration
├── package.json        # Project configuration
├── *.jpg               # Player photos
└── AKT_youtube-shortcuts.xlsx  # Excel file with video links
```

## Customization

### Adding YouTube Videos
1. Get the video ID from YouTube URL (e.g., from `https://youtu.be/VIDEO_ID`)
2. Update the corresponding entry in `script.js`

### Language Translations
- All text elements use `data-en` and `data-km` attributes
- Add new translations by updating these attributes in HTML
- Khmer text automatically uses the Khmer font

### Styling
- Main colors: Blue (#2c5aa0) and Red (#d32f2f) representing Cambodia
- Font: Noto Serif for English, Noto Sans Khmer for Khmer text
- All styling is in `styles.css`

## Browser Support

- Modern browsers with ES6+ support
- Mobile responsive design
- Tested on Chrome, Firefox, Safari, and Edge

## Links

- [ASEAN Kendo Tournament Official Site](https://www.13akt2025.com/)
- [Phnom Penh Kendo Club](https://phnompenhkendoclub.wordpress.com/)