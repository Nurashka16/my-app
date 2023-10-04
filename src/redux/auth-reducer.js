import AuthAPI from "../API/AuthAPI";

const REGISTER_USER = "REGISTER_USER";
const CHANGE_INPUT_REGISTER = "CHANGE_INPUT_REGISTER";
const CHANGE_EMAIL = "CHANGE_EMAIL";
const CHANGE_PASSWORD = "CHANGE_PASSWORD";
const AUTH_USER = "AUTH_USER ";

const initialState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  avatar: "",
  token: "",
  password: "",
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
        password: "",
      };
    }
    case CHANGE_INPUT_REGISTER: {
      return {
        ...state,
        ...action.obj,
      };
    }
    case CHANGE_EMAIL: {
      return {
        ...state,
        email: action.letter,
      };
    }
    case CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.letter,
      };
    }
    case AUTH_USER: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
        password: "",
      };
    }
    default:
      return state;
  }
};
export const registerUser = (data) => ({
  type: REGISTER_USER,
  data,
});
export const changeInputRegister = (obj) => ({
  type: CHANGE_INPUT_REGISTER,
  obj,
});

export const changeEmail = (letter) => ({
  type: CHANGE_EMAIL,
  letter,
});
export const changePassword = (letter) => ({
  type: CHANGE_PASSWORD,
  letter,
});

export const authUser = (data) => ({
  type: AUTH_USER,
  data,
});

export const signIn = (email, password) => (dispatch) => {
  AuthAPI.signIn(email, password)
    .then((response) => {
      dispatch(authUser(response));
    })
    .catch((response) => {
      console.log("ошибка в singIn");
    });
};
export const signUp = (request) => (dispatch) => {
  AuthAPI.signUp(request)
    .then((response) => {
      dispatch(registerUser(response));
    })
    .catch((response) => {
      console.log("ошибка в singUp");
    });
};

export default authReducer;
