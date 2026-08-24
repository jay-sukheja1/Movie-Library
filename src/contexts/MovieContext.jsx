import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prevFavs) => [...prevFavs, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prevFavs) => prevFavs.filter((fav) => fav.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((fav) => fav.id === movieId);
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
