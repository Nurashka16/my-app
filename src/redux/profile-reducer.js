const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
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
  user: null,
  id: 'de3d08e0-e04c-40dc-8552-ffcf19bb15ec',
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        number: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USER: {
      console.log(action.user);
      return { ...state, user: action.user };
    }
    case IS_FETCHING: {
      return { ...state, value: action.value };
    }
    case CLEAR_STATE: {
      return {
        ...state, user: null 
      }
    }
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const clearState = () => ({type: CLEAR_STATE,
});
export const setUser = (user) => ({ type: SET_USER, user });
export const toggleIsFetching = (value) => ({
  type: IS_FETCHING, value
});

export default profileReducer;
