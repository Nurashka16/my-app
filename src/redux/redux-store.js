import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import dialogsReducer from "./dialogs-reducer";
import musicReducer from "./music-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
  authPage: authReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
