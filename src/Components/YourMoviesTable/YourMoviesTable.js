import React, { useEffect } from "react";
import "./YourMoviesTable.css";
import YourMoviesItem from "../YourMoviesItem/YourMoviesItem";
import { useState } from "react";

const YourMoviesTable = () => {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("current-user"))
  );
  const [yourMovies, setYourMovies] = useState([]);
  const [availableMovies, setAvailableMovies] = useState(
    JSON.parse(localStorage.getItem("reactMovieList"))
  );

  useEffect(() => {
    const movies = currentUser.rentedMovies;
    if (movies && movies.length > 0) {
      setYourMovies(movies);
    }
  }, []);

  const removeMovie = (movieToRemove) => {
    const removedMovieIndex = yourMovies.findIndex(
      (movie) => movie.movieName === movieToRemove.movieName
    );

    if (removedMovieIndex !== -1) {
      const updatedMovies = [...yourMovies];
      const removedMovie = updatedMovies[removedMovieIndex];

      if (removedMovie.count > 1) {
        removedMovie.count--;
        updatedMovies[removedMovieIndex] = removedMovie;
        setYourMovies(updatedMovies);

        const updatedUser = {
          ...currentUser,
          rentedMovies: updatedMovies,
        };

        localStorage.setItem("current-user", JSON.stringify(updatedUser));

        const users = JSON.parse(
          localStorage.getItem("react-movie-rental-users")
        );
        const userIndex = users.findIndex((user) => user.id === updatedUser.id);

        if (userIndex !== -1) {
          users[userIndex] = updatedUser;

          localStorage.setItem(
            "react-movie-rental-users",
            JSON.stringify(users)
          );
        } else {
          alert("Email not valid");
        }
      } else if (removedMovie.count === 1) {
        updatedMovies.splice(removedMovieIndex, 1);
        setYourMovies(updatedMovies);
        const updatedUser = {
          ...currentUser,
          rentedMovies: updatedMovies,
        };

        localStorage.setItem("current-user", JSON.stringify(updatedUser));

        const users = JSON.parse(
          localStorage.getItem("react-movie-rental-users")
        );
        const userIndex = users.findIndex((user) => user.id === updatedUser.id);

        if (userIndex !== -1) {
          users[userIndex] = updatedUser;

          localStorage.setItem(
            "react-movie-rental-users",
            JSON.stringify(users)
          );
        }
      }
    }

    const moveToUpdateIndex = availableMovies.findIndex(
      (item) => item.movieName === movieToRemove.movieName
    );

    const updatedAvailableMovies = [...availableMovies];
    const moveToUpdate = updatedAvailableMovies[moveToUpdateIndex];

    moveToUpdate.inStock++;
    updatedAvailableMovies[moveToUpdateIndex] = moveToUpdate;
    localStorage.setItem(
      "reactMovieList",
      JSON.stringify(updatedAvailableMovies)
    );

    setAvailableMovies(updatedAvailableMovies);
  };

  if (yourMovies.length === 0) {
    
    return <div>No movies to show</div>;
  }

  return (
    <div className="YourMoviesPageMovieTable">
      {yourMovies.map((movie) => (
        <YourMoviesItem
          key={movie.movieName}
          movie={movie}
          removeMovie={removeMovie}
        />
      ))}
    </div>
  );
};

export default YourMoviesTable;
