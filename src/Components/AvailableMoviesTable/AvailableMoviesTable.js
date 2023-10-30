import { useState, useEffect } from "react";
import originalMovieList from "../../Database/MoviesInStock";
import HomePageMovieItem from "../HomePageMovieItem/HomePageMovieItem";

const AvailableMoviesTable = () => {
  const [availableMovies, setAvailableMovies] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movieList"));
    if (movies && movies.length > 0) {
      setAvailableMovies(movies);
    } else {
      setAvailableMovies(originalMovieList);
    }
  }, []);

  return (
    <div className="MovieTable">
      {availableMovies.map((movie) => (
        <HomePageMovieItem key={movie.movieName} movie={movie} />
      ))}
    </div>
  );
};

export default AvailableMoviesTable;
