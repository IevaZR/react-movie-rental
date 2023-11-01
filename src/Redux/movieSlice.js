import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    rentedMovies:
      JSON.parse(localStorage.getItem("current-user"))?.rentedMovies || [],
  },
  reducers: {
    rentMovie: (state, action) => {
      state.rentedMovies.push(action.payload);
    },
    returnMovie: (state, action) => {
      state.rentedMovies = state.rentedMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const {rentMovie, returnMovie} = movieSlice.actions
export default movieSlice.reducer