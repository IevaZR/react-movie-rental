import { useState, useEffect } from "react";
import "./AvailableMoviesTable.css";
import originalMovieList from "../../Database/MoviesInStock";
import HomePageMovieItem from "../HomePageMovieItem/HomePageMovieItem";

const AvailableMoviesTable = () => {
  const [availableMovies, setAvailableMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("current-user"))
  );

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

    const userMovies = currentUser.rentedMovies;

    const movieToAdd = userMovies.find(
      (item) => item.movieName === rentedMovie.movieName
    );

    if (!movieToAdd) {
      const newMovie = { ...rentedMovie, count: 1 };

      userMovies.push(newMovie);
    } else {
      movieToAdd.count++;
    }

    const updatedUser = {
      ...currentUser,
      rentedMovies: userMovies,
    };

    localStorage.setItem("current-user", JSON.stringify(updatedUser));
    localStorage.setItem(
      "reactMovieList",
      JSON.stringify(updatedAvailbaleMovies)
    );

    const users = JSON.parse(localStorage.getItem("react-movie-rental-users"));
    const userIndex = users.findIndex((user) => user.id === updatedUser.id);

    if (userIndex !== -1) {
      users[userIndex] = updatedUser;

      localStorage.setItem("react-movie-rental-users", JSON.stringify(users));
    } else {
      alert("Email not valid");
    }
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
