import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/auth/auth-slice.ts";
import dialogsSlice from "./redux/dialogs/dialogs-slice.ts";
import musicsSlice from "./redux/musics/music-slice.ts";
import profileSlice from "./redux/profile/profile-slice.ts";
import usersSlice from "./redux/users/usersSlice.ts";
import newsSlice from "./redux/news/news-slice.ts";

const rootReducer = combineReducers({
  profile: profileSlice,
  dialogs: dialogsSlice,
  users: usersSlice,
  musics: musicsSlice,
  news: newsSlice,
  auth: authSlice,
});
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof rootReducer>
