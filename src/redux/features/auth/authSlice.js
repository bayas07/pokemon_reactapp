import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientId:
    "1041580157765-p7msr7pi6i60bl8gef1a360us0kgfgqf.apps.googleusercontent.com",
  isLoggedIn: false,
  userData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogOut: (state) => {
      state.isLoggedIn = false;
      state.userData = {};
    },
    setUserData: (state, { payload }) => {
      state.userData = payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
export const authSliceActions = authSlice.actions;
