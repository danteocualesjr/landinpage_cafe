# Coffee Shop Landing Page

A modern, responsive landing page for a coffee shop built with React and Vite.

## Features

- **Hero Section** - Eye-catching introduction with call-to-action
- **About Section** - Story and mission of the coffee shop
- **Menu Section** - Interactive menu with categories (Coffee, Pastries, Specialty Drinks)
- **Location Section** - Address, hours, and Google Maps integration
- **Testimonials** - Customer reviews carousel
- **Gallery** - Image gallery with lightbox functionality
- **Social Media** - Links to social media platforms
- **Contact Form** - Contact form with validation
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Scrolling** - Smooth navigation between sections

## Tech Stack

- React 18
- Vite
- React Icons
- CSS3 with CSS Variables
- Google Fonts (Playfair Display & Inter)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
landingpage_cafe/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── Location.jsx
│   │   ├── Contact.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Gallery.jsx
│   │   ├── Social.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Colors

Edit CSS variables in `src/App.css`:
- `--coffee-dark`, `--coffee-medium`, `--coffee-light` - Coffee tones
- `--cream`, `--cream-light` - Background colors
- `--accent-gold`, `--accent-brown` - Accent colors

### Content

Update content in each component file:
- Company name: Update in `Header.jsx` and `Footer.jsx`
- Contact information: Update in `Location.jsx` and `Contact.jsx`
- Menu items: Update in `Menu.jsx`
- Images: Replace placeholder URLs with your own images

### Google Maps

Update the iframe `src` in `Location.jsx` with your actual location's Google Maps embed URL.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.
# landinpage_cafe
