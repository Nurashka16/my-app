import ProfileApi from "../API/ProfileApi";
import Preloader from "../Components/Preloader/preloader";

const ADD_POST = "ADD_POST";
const UPDATE_TEXT_INPUT = "UPDATE_TEXT_INPUT";
const SET_USER = "SET_USER";
const IS_FETCHING = "IS_FETCHING";
const CLEAR_STATE = "CLEAR_STATE";

let initialState = {
  posts: [
    {
      id: 1,
      message: "Hi!",
      number: 5,
    },
    {
      id: 2,
      message: "How are you?",
      number: 10,
    },
  ],
  newPostText: "danya kaka",
  user: [
    {
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      avatar: "",
    },
  ],
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      state.posts.push({
        id: state.posts.length + 1,
        message: state.newPostText,
        number: 0,
      });
      state.newPostText = "";
      return {
        ...state,
        ...state.posts,
      };
    }
    case UPDATE_TEXT_INPUT: {
      return { ...state, newPostText: action.letter };
    }
    case SET_USER: {
      return { ...state, user: action.user };
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.boolean };
    }
    case CLEAR_STATE: {
      return {
        ...state,
        user: null,
        id: null,
      };
    }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateTextInput = (letter) => ({
  type: UPDATE_TEXT_INPUT,
  letter,
});
export const clearState = () => ({ type: CLEAR_STATE });
export const setUser = (user) => ({ type: SET_USER, user });
export const isFetching = (boolean) => ({
  type: IS_FETCHING,
  boolean,
});

export const setProfile = (id) => (dispatch) => {
  dispatch(isFetching(true));
  ProfileApi.getProfile(id)
    .then((response) => {
      dispatch(setUser(response));
      dispatch(isFetching(false));
    })
    .catch((response) => {
      console.log("ошибка в getProfile");
    });
};

export default profileReducer;
