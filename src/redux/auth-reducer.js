import AuthAPI from "../API/AuthAPI";

const REGISTER_USER = "REGISTER_USER";
const AUTH_USER = "AUTH_USER ";
const CLEAR_DATA = "CLEAR_DATA";

const initialState = {
  owner: {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
    token: "",
    password: "",
  },
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

    case AUTH_USER: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
        password: "",
      };
    }
    case CLEAR_DATA: {
      {
        return (state = { ...initialState });
      }
    }
    default:
      return state;
  }
};
export const registerUser = (data) => ({
  type: REGISTER_USER,
  data,
});
export const authUser = (data) => ({
  type: AUTH_USER,
  data,
});
export const clearData = () => ({
  type: CLEAR_DATA,
});

export const signIn = (email, password) => (dispatch) => {
  return AuthAPI.signIn(email, password)
    .then((response) => {
      dispatch(authUser(response));
      return {
        isSuccess: true,
      };
    })
    .catch((response) => {
      console.log("ошибка в singIn");
      return {
        isSuccess: false,
      };
    });
};
export const signUp = (request) => async (dispatch) => {
  try {
    let data = await AuthAPI.signUp(request);
    dispatch(registerUser(data));
    return {
      isSuccess: true,
    };
  } catch (err) {
    console.log("ошибка в singUp");
    return {
      isSuccess: false,
    };
  }
};

export default authReducer;
