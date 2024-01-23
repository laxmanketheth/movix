# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Movix App

Movix is a React application built using Redux Toolkit for state management and the TMDB API to fetch data for various components and pages. The project also utilizes SCSS for styling.

## Features

- Explore popular movies and TV shows
- Search for movies and TV shows
- View detailed information about movies and TV shows
- Filter and sort movies and TV shows based on various criteria

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/movix.git
   ```

2. Install dependencies:

   ```
   cd movix
   npm install
   ```

3. Set up TMDB API key:

   - Rename the `.env.example` file to `.env`.
   - Replace `YOUR_API_KEY` with your TMDB API key in the `.env` file.

4. Run the application:

   ```
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

## Project Structure

The project follows a standard directory structure for a React application created using Redux Toolkit.

- `src/` - Contains the main source code of the application.
  - `components/` - Contains reusable components used throughout the app.
  - `pages/` - Contains the main pages of the app.
  - `store/` - Contains Redux Toolkit setup, including actions, reducers, and store configuration.
  - `services/` - Contains the TMDB API service for fetching data.
  - `styles/` - Contains SCSS files for styling the app.
  - `utils/` - Contains utility functions used in the app.

## Technologies Used

- React
- Redux Toolkit
- TMDB API
- SCSS
