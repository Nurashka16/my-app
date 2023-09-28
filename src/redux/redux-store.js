import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import musicReducer from "./music-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import headerReducer from "./header-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
  authPage: authReducer,
  headerPage: headerReducer, //page название не соответствует блоку
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
