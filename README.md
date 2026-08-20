# CAN 2026 — Africa Cup of Nations Fan Guide

A front-end website serving as a fan guide for the 2025/2026 Africa Cup of Nations hosted in Morocco, featuring match schedules, host city information, and local services.

## Features

- **Match Slider** — Auto-rotating match cards with navigation arrows and dots
- **City Search** — Search host cities by name or team
- **City Cards** — Tabbed interface (Hotels / Restaurants / Transport) for each host city
- **Host Cities Covered** — Casablanca, Tangier, Rabat, Marrakech, Agadir, Fez
- **Responsive Design** — Adapts to mobile and desktop viewports
- **Two Versions** — Single-file prototype (`temp2/`) and modular refactor (`temp4/`)

## Technologies

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure |
| CSS3 | Custom properties, animations, transitions, media queries |
| Tailwind CSS (CDN) | Utility-first styling (temp2 version) |
| JavaScript (ES6+) | Dynamic content generation, search, tab switching |
| Google Fonts (Poppins) | Typography |
| Font Awesome 6.4.0 | Icons |

## Project Structure

```
├── temp2/
│   └── index.html          # Single-file Tailwind prototype
├── temp4/
│   ├── index.html           # Modular HTML structure
│   ├── style.css            # Custom CSS with theming
│   └── script.js            # City data, slider, search, tabs
├── jami3a images/           # Stadium and city photographs
└── jami3a images.rar        # Compressed image archive
```

## How to Use

- **Quick prototype:** Open `temp2/index.html` in a browser
- **Modular version:** Open `temp4/index.html` in a browser
