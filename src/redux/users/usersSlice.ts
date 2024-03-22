import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../app/types/user";

interface UsersState {
  users: Array<User>;
  page: number;
  pageSize: number;
}

const initialState: UsersState = { users: [], page: 1, pageSize: 20 };
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    follow(state, action: PayloadAction<string>) {
      state.users = setFollow(state.users, action.payload, false);
    },
    unfollow(state, action: PayloadAction<string>) {
      state.users = setFollow(state.users, action.payload, true);
    },
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
  },
});

const setFollow = (users: Array<User>, userId: string, value: boolean) =>
  users.map((u) => {
    if (u.id === userId) {
      u.follow = value;
    }
    return u;
  });

export default usersSlice.reducer;
export const { follow, setUsers, unfollow } = usersSlice.actions;
