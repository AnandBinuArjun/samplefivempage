# NeonRP - Premium GTA V Roleplay Server Website

![NeonRP Website](screenshot.png)

[GitHub Repository](https://github.com/AnandBinuArjun/samplefivempage)

A modern, responsive, and interactive website for a premium GTA V roleplay server with neon-themed design and 3D effects.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Responsive Design](#responsive-design)
- [Performance Optimizations](#performance-optimizations)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Overview

NeonRP is a visually stunning website designed for a premium GTA V roleplay server. The website features a dark theme with neon blue accents, animated 3D cards, interactive elements, and a responsive design that works across all devices.

## Features

- **Responsive Design**: Fully responsive layout that adapts to mobile, tablet, and desktop screens
- **Interactive Elements**: Animated 3D cards, hover effects, and interactive buttons
- **Video Background**: Engaging video background with overlay for better text readability
- **Modern UI Components**: 
  - Feature cards with hover animations
  - Game mode sections
  - Rules display with categorized information
  - Staff team profiles
  - FAQ accordion
  - Server connection information
- **Performance Optimized**: Throttled animations and efficient JavaScript for smooth performance
- **Touch Support**: Mobile-friendly touch interactions

## Technologies Used

- HTML5
- CSS3 (with custom properties/variables)
- JavaScript (Vanilla ES6+)
- Bootstrap 5.3
- Font Awesome 6.4
- Google Fonts (Orbitron and Roboto)

## Installation

1. Clone the repository:
   ```bash
   git clonehttps://github.com/AnandBinuArjun/samplefivempage.git
   ```

2. Navigate to the project directory:
   ```bash
   cd neonrp-website
   ```

3. Open `index.html` in your browser or serve it using a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

## Usage

Simply open `index.html` in any modern web browser to view the website. All assets are included in the project.

To customize the content:
1. Edit `index.html` to change text, links, and content
2. Modify `styles.css` to change colors, fonts, and layouts
3. Update `script.js` to modify interactive behaviors

## Responsive Design

The website is fully responsive and includes:
- Mobile-first approach
- Flexible grid layouts using Bootstrap
- Media queries for different screen sizes
- Adjustable font sizes and spacing
- Touch-friendly interactive elements

Breakpoints:
- Extra small devices (portrait phones): <576px
- Small devices (landscape phones): ≥576px
- Medium devices (tablets): ≥768px
- Large devices (desktops): ≥992px
- Extra large devices (large desktops): ≥1200px

## Performance Optimizations

- Throttled mouse move events to prevent performance issues
- Efficient animations using CSS transforms and transitions
- Intersection Observer API for scroll-based animations
- RequestAnimationFrame for smooth animations
- Passive event listeners for better scroll performance
- Optimized JavaScript with feature detection

## Project Structure

```
neonrp-website/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # Custom JavaScript
├── favicon.ico         # Website favicon
├── README.md           # This file
└── screenshot.png      # Website screenshot (add this yourself)
```

## Customization

### Colors
The website uses CSS custom properties for easy color customization. Modify these in `styles.css`:

```css
:root {
    --neon-blue: #00f3ff;
    --neon-blue-dark: #008b94;
    --neon-blue-light: #6effff;
    --dark-bg: #0a0a1a;
    --darker-bg: #050510;
    --text-light: #ffffff;
    --text-gray: #cccccc;
    --accent-purple: #bd00ff;
    --accent-red: #ff0055;
    --accent-green: #00ffaa;
}
```

### Fonts
The website uses Google Fonts:
- **Orbitron** for headings (futuristic tech look)
- **Roboto** for body text (clean and readable)

### Content
All content can be easily modified in `index.html`. Sections include:
- Hero section
- Features
- Game modes
- Rules
- Staff team
- FAQ
- Connection information

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Create a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This website is not affiliated with Rockstar Games or Take-Two Interactive. This is a fan-made website for a fictional roleplay server.