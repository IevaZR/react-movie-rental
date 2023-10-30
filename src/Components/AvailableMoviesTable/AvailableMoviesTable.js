import { useState, useEffect } from "react";
import "./AvailableMoviesTable.css";
import originalMovieList from "../../Database/MoviesInStock";
import HomePageMovieItem from "../HomePageMovieItem/HomePageMovieItem";

const AvailableMoviesTable = () => {
  const [availableMovies, setAvailableMovies] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("reactMovieList"));
    if (movies && movies.length > 0) {
      setAvailableMovies(movies);
    } else {
      setAvailableMovies(originalMovieList);
    }
  }, []);

  const rentMovie = (rentedMovieName) => {
    const updatedAvailbaleMovies = availableMovies.map((movie) => {
      if (movie.movieName === rentedMovieName && movie.inStock > 0) {
        return {
          ...movie,
          inStock: movie.inStock - 1,
        };
      }
      return movie;
    });

    const rentedMovie = availableMovies.find(
      (movie) => movie.movieName === rentedMovieName
    );

    if (!rentedMovie || rentedMovie.inStock === 0) {
      return;
    }

    setAvailableMovies(updatedAvailbaleMovies);

    const yourMovies =
      JSON.parse(localStorage.getItem("reactYourMovies")) || [];

    const movieToAdd = yourMovies.find(
      (item) => item.movieName === rentedMovie.movieName
    );

    if (!movieToAdd) {
      const newMovie = { ...rentedMovie, count: 1 };
      console.log(newMovie);
      yourMovies.push(newMovie);
    } else {
      movieToAdd.count++;
    }

    console.log(yourMovies);

    localStorage.setItem("reactYourMovies", JSON.stringify(yourMovies));
    localStorage.setItem(
      "reactMovieList",
      JSON.stringify(updatedAvailbaleMovies)
    );
  };

  return (
    <div className="HomePageMovieTable">
      {availableMovies.map((movie) => (
        <HomePageMovieItem
          key={movie.movieName}
          movie={movie}
          rentMovie={rentMovie}
        />
      ))}
    </div>
  );
};

export default AvailableMoviesTable;
