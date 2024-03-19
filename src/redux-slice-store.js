import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/auth-slice";
import dialogsReducer from "./redux/dialogs-slice";
import musicReducer from "./redux/musicSlice";
import profileReducer from "./redux/profile-slice";
import usersReducer from "./redux/users/usersSlice";
import newsSlice from "./redux/news-slice";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
  news: newsSlice,
  auth: authSlice,
});
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
