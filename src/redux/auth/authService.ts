import AuthAPI from "../../API/AuthAPI";
import { authUser, registerUser } from "./auth-slice.ts";
import { Dispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { Profile } from "../../app/types/profile.ts";
import { SignUpRequest } from "../../app/types/api/signUp.ts";

export const signIn =
  (email: string, password: string) => (dispatch: Dispatch<AnyAction>) => {
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
export const signUp =
  (request: SignUpRequest) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      let data: Profile = await AuthAPI.signUp(request);
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
