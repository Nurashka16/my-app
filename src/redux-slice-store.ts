import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/auth/auth-slice";
import dialogsSlice from "./redux/dialogs/dialogs-slice";
import musicsSlice from "./redux/musics/music-slice";
import profileSlice from "./redux/profile/profile-slice";
import usersSlice from "./redux/users/usersSlice";
import newsSlice from "./redux/news/news-slice";

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
