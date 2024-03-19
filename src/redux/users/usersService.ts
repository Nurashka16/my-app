import { Dispatch } from "@reduxjs/toolkit";
import UsersAPI from "../../API/UsersAPI";
import { follow, setUsers, unfollow } from "./usersSlice";
import { AnyAction } from "redux";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  follow: boolean;
}

export const setFollow =
  (userId: string, value: boolean) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      let data = await UsersAPI.isFollowed(userId, value);
      value ? dispatch(unfollow(userId)) : dispatch(follow(userId));
    } catch (err) {
      console.log("ошибка в follow");
    }
  };

export const getUsers =
  (page: number, pageSize: number) => (dispatch: Dispatch<AnyAction>) => {
    return UsersAPI.getUsers(page, pageSize)
      .then((response) => {
        dispatch(setUsers(response.data));
      })
      .catch((response) => {
        console.log("ошибка в getUsers");
      });
  };
