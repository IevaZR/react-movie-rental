import { createSlice } from "@reduxjs/toolkit"
import { loginUser, clearLoginError } from "./userActions";

const userSlice = createSlice({
    name: 'user',
    initialSate: {data: null, loginError: false},
    reducers: {
        setUser: (state, action) => action.payload,
        clearUser: () => null
    }
})

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;