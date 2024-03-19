import { createSlice } from "@reduxjs/toolkit";
import AuthAPI from "../API/AuthAPI";

const authSlice = createSlice({
  name: "auth",
  initialState: {
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
  },
  reducers: {
    registerUser(state, action) {
      console.log(action);
      return {
        ...state,
        ...action.data,
        isAuth: true,
        password: "",
      };
    },
    authUser(state, action) {
      return {
        ...state,
        ...action.data,
        isAuth: true,
        password: "",
      };
    },
    clearData(state) {
      {
        return (state = { ...state }); //было initialState
      }
    },
  },
});

export const signIn = (email, password) => (dispatch) => {
  return AuthAPI.signIn(email, password)
    .then((response) => {
      dispatch(authSlice.authUser(response));
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
    dispatch(authSlice.registerUser(data));
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

export default authSlice.reducer;
export const { authUser, clearData, registerUser } = authSlice.actions;
