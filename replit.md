# أفلامي (Aflami) - Movie & TV Series Platform

## Overview
A bilingual (Arabic/English) movie and TV series streaming platform built with React and Vite. The application allows users to browse trending movies and TV shows, search with advanced filters, view detailed information including cast and crew, and watch trailers using an integrated video player.

## Features
- ✅ Bilingual support (Arabic/English) with RTL/LTR direction
- ✅ Dark/Light theme mode
- ✅ Trending movies and TV shows
- ✅ Advanced search and filtering (by genre, year, rating, popularity)
- ✅ Detailed movie/TV show pages with cast information
- ✅ Integrated video player for trailers (ReactPlayer)
- ✅ Responsive design for mobile and desktop
- ✅ TMDb API integration
- ✅ Developer credit footer

## Tech Stack
- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **Internationalization**: i18next
- **Video Player**: React Player
- **API**: The Movie Database (TMDb)
- **Styling**: CSS with custom properties for theming

## Project Structure
```
src/
├── api/
│   └── tmdb.js          # TMDb API integration
├── components/
│   ├── Navbar.jsx       # Navigation with search and theme toggle
│   ├── Footer.jsx       # Footer with developer credit
│   ├── MediaCard.jsx    # Movie/TV show card component
│   ├── MediaGrid.jsx    # Grid layout for media cards
│   └── VideoPlayer.jsx  # Video player wrapper
├── pages/
│   ├── Home.jsx         # Homepage with trending content
│   ├── Movies.jsx       # Movies page with filters
│   ├── TVShows.jsx      # TV shows page with filters
│   └── MovieDetail.jsx  # Detailed view for movie/show
├── styles/
│   └── index.css        # Global styles with theme support
├── App.jsx              # Main app component with routing
├── i18n.js              # i18next configuration
└── main.jsx             # React entry point
```

## Recent Changes (Nov 20, 2025)
- Initial project setup with React + Vite
- Implemented complete bilingual system (Arabic/English) with dynamic TMDb API language switching
- Created all core components and pages
- Integrated TMDb API for movie and TV show data (using environment variables for security)
- Added dark/light theme support
- Implemented responsive design
- Added video player for trailers
- **Replaced all emojis with professional React Icons library**
- Added professional icon set (MdLocalMovies, IoSearch, IoStar, MdLightMode, MdDarkMode, IoArrowBack)
- Enhanced CSS for better icon display and alignment

## Developer
Developed by [@rulerhmod](https://twitter.com/rulerhmod)

## API Configuration
The application uses TMDb API. The API key is configured in the environment variables or falls back to the provided key for development.
