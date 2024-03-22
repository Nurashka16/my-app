import { createSlice } from "@reduxjs/toolkit";
import AuthAPI from "../../API/AuthAPI";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../../app/types/profile";

interface AuthState {
  profile: Profile;
  isAuth: boolean;
}
const initialState: AuthState = {
  profile: {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
    token: "",
    password: "",
    follow: false,
  },
  isAuth: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser(state, action:PayloadAction<Profile>) {
      state.profile = action.payload
      state.isAuth = true;

    },
    authUser(state, action:PayloadAction<Profile>) {
      state.profile = action.payload
      state.isAuth = true;

    },
    clearData(state) {
      state = { ...state }; //было initialState
    },
  },
});



export default authSlice.reducer;
export const { authUser, clearData, registerUser } = authSlice.actions;
