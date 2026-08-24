# Movie Library

A simple React movie library app built with Vite. It lets users browse popular movies from The Movie Database (TMDb), search for movies, and save favorite titles in local storage.

## Features

- Browse popular movies on the home page
- Search movies by title
- Add or remove movies from favorites
- View all saved favorites in a dedicated page
- Favorite state persists using `localStorage`
- Responsive movie grid layout

## Tech Stack

- React
- Vite
- React Router
- TMDb API
- CSS modules / custom CSS

## Project Structure

- `src/App.jsx` – app routing and provider setup
- `src/pages/Home.jsx` – popular movies and movie search UI
- `src/pages/Favorites.jsx` – favorite movie list
- `src/components/MovieCard.jsx` – movie card and favorite toggle
- `src/contexts/MovieContext.jsx` – global favorites state
- `src/services/api.js` – TMDb API calls
- `src/css/` – styling files

## Getting Started

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## API
This app uses the TMDb API to fetch:
- popular movies
- movie search results

The API key is currently defined in:
```javascript
src/services/api.js
```

## Screens
- Home page: ```\```
- Favorites page: ```\favorites```

## Notes
This project is a demo-style movie library focused on React state management, routing, and API integration.