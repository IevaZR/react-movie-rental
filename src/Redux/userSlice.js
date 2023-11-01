import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
    registerUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const {setCurrentUser, logoutUser, registerUser} = userSlice.actions
export default userSlice.reducer
