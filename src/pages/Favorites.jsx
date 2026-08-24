import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext.jsx";
import MovieCard from "../components/MovieCard.jsx";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className={"favorites-empty"}>
        <h2>No Favorite Movies yet</h2>
        <p>
          Start adding movies to your favorites &amp; they will appear here!
        </p>
      </div>
    );
  }

  return (
    <div className={"favorites"}>
      <h2>Your Favs</h2>
      <div className={"movies-grid"}>
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
