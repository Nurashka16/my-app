import {combineReducers, legacy_createStore as createStore} from "redux"; 
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import musicReducer from "./music-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import autoReducer from "./auto-reducer";


let reducers = combineReducers( {
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   friendsPage: friendsReducer,
   usersPage: usersReducer,
   musicPage: musicReducer,
   autoPage: autoReducer,
});
let store = createStore(reducers);
window.store = store;

export default store;