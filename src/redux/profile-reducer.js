import ProfileApi from "../API/ProfileApi";

const ADD_POST = "ADD_POST";
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
  isFetching: false,
  userInfo: {},
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: state.posts.length + 1, message: action.value, number: 0 },
        ],
      };
    }
    case SET_USER: {
      return { ...state, userInfo: action.userInfo };
    }
    case IS_FETCHING: {
      return { ...state, isFetching: action.boolean };
    }
    default:
      return state;
  }
};

export const addPost = (value) => ({ type: ADD_POST, value });
export const clearState = () => ({ type: CLEAR_STATE });
export const setUser = (userInfo) => ({ type: SET_USER, userInfo });
export const isFetching = (boolean) => ({
  type: IS_FETCHING,
  boolean,
});

export const setProfile = (id) => async (dispatch) => {
  try {
    dispatch(isFetching(true));
    let data = await ProfileApi.getProfile(id);
    dispatch(setUser(data));
    dispatch(isFetching(false));
  } catch (err) {
    console.log("ошибка в getProfile");
  }
};

export default profileReducer;
