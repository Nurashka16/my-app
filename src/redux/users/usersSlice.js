import UsersAPI from "../../API/UsersAPI";
import * as usersService from "./usersService";

import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    page: 1,
    pageSize: 20,
  },
  reducers: {
    follow(state, action) {
      state.users = setFollow(state.users, action.userId, false);
    },
    unfollow(state, action) {
      state.users = setFollow(state.users, action.userId, true);
    },
    setUsers(state, action) {
      state.users = action.users;
    },
  },
});

const setFollow = (users: [User], userId: string, value: boolean) =>
  users.map((u) => {
    if (u.id === userId) {
      u.follow = value;
    }
    return u;
  });

export default usersSlice.reducer;
export const {follow,setUsers,unfollow} = usersSlice.actions;
