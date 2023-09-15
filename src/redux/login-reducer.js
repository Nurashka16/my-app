import LoginAPI from "../API/AuthAPI";
import { setIsFetching } from "./users-reducer";

const EMAIL_CHANGES = "EMAIL_CHANGES";
const PASSWORD_CHANGES = "PASSWORD_CHANGES";
const SET_CREDENTIALS = "SET_CREDENTIALS";

const initialState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  avatar: "",
  token: "",
  password: "",
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGES: {
      return {
        ...state,
        email: action.letter,
      };
    }
    case PASSWORD_CHANGES: {
      return {
        ...state,
        password: action.letter,
      };
    }
    case SET_CREDENTIALS: {
      return {
        ...state,
        ...action.data,
        password: null,
      };
    }
    default:
      return state;
  }
};

export const emailChanges = (letter) => ({
  type: EMAIL_CHANGES,
  letter,
});
export const passwordChanges = (letter) => ({
  type: PASSWORD_CHANGES,
  letter,
});

export const setCredentials = (data) => ({
  type: SET_CREDENTIALS,
  data,
});

export const signIn = (email, password) => (dispatch) => {
  LoginAPI.signIn(email, password)
    .then((response) => {
      dispatch(setCredentials(response));
    })
    .catch((response) => {
      console.log("ошибка в singIn");
    });
};

export default loginReducer;
