import MovieCard from "../components/MovieCard.jsx";
import { useEffect, useState } from "react";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api.js";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        setError(null);
      } catch (error) {
        setError("Failed to fetch popular movies. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      setError("Failed to search for movies. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  return (
    <div className={"home"}>
      <form className={"search-form"} onSubmit={handleSearch}>
        <input
          className={"search-input"}
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className={"search-button"} type="submit">
          Search
        </button>
      </form>
      <div className={"movies-grid"}>
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
