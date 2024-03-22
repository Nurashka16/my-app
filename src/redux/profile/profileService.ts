import ProfileApi from "../../API/ProfileApi";
import { isFetching, setUser } from "./profile-slice";
import { Dispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";

export const setProfile = (id:string) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(isFetching(true));
    let data = await ProfileApi.getProfile(id);
    dispatch(setUser(data));
    dispatch(isFetching(false));
  } catch (err) {
    console.log("ошибка в getProfile");
  }
};
