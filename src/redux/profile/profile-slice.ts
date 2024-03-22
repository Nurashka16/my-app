import constants from "../../Components/ProfilePage/MediaResources/constants";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User, UserInfo } from "../../app/types/user";
import { Friend } from "../../app/types/friends";
import { ProfileInfo } from "../../app/types/profile";
import { Post } from "../../app/types/post";

interface ProfileState {
  posts: Array<Post>;
  isFetching: boolean;
  user: User;
  userInfo: UserInfo;
  profileInfo: ProfileInfo;
  friends: Array<Friend>;
  friendsCount: string; //плохое название пр totalCount
  mediaResource: string;
}
const initialState: ProfileState = {
  posts: [
    {
      id: 1,
      text: "12:21.   ты угадал моя любовь такая, что даже ты не смог её убить.",
      like: 5,
      comments: 0,
      share: 1,
      viewed: 10,
      img: "",
      date: "18 фев в 9:09",
      name: "",
      avatar: "",
    },
    {
      id: 2,
      text: "",
      like: 10,
      comments: 5,
      share: 0,
      viewed: 50,
      img: "https://sun1-14.userapi.com/impg/238554rfBWFVjFeCKkdEkC1-j0oh-U5z-pq6ZQ/QerXV_4Gc9Y.jpg?size=605x807&quality=95&sign=fedd623f574b86b58774839c3150e1c3&c_uniq_tag=96vv9YsVhTqTDJy8da6FaGi_X2KAPLuN_70XCoYEMmQ&type=album",
      date: "18 фев в 9:09",
      name: "",
      avatar: "",
    },
  ],
  isFetching: false,
  user: {
    avatar: "",
    email: "",
    firstName: "",
    follow: false,
    id: "",
    lastName: "",
  },
  userInfo: {
    birthday: "16.02.2001",
    city: "Москва",
    work: "нигде",
    familyStatus: "замужем",
    nik: "@idonia",
    status: "",
    id: "",
    firstName: "",
    lastName: "",
    avatar: "",
  },
  profileInfo: {
    dateOfBirth: "16.02.2001",
    city: "Москва",
    placeOfWork: "нигде",
    familyStatus: "замужем",
    nik: "@idonia",
    status: "",
  },
  friends: [
    {
      id: 1,
      name: "Маша",
      avatar:
        "https://sun9-75.userapi.com/impg/mda-T0jNCgeE3lYT66RhUBR-b8RdNi6d9jxc7g/QvTnYbPO7aY.jpg?size=340x604&quality=95&sign=9ae52ad4ef3dd91d43c23fd89f79e5e5&type=album",
    },
    {
      id: 2,
      name: "Лена",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFCtEcT2eKKjWfH2kDtjZ5rUz96RdfnSFMw&usqp=CAU",
    },
    {
      id: 3,
      name: "Петя",
      avatar: "https://i.imgur.com/JELFi5u.jpg",
    },
  ],
  friendsCount: "3",
  mediaResource: constants[0].name,
};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<string>) {
      const newPost: Post = {
        id: state.posts.length + 1,
        text: action.payload,
        like: 0,
        comments: 0,
        share: 0,
        viewed: 0,
        img: "",
        date: "",
        avatar: "",
        name: "",
      };
      state.posts = [...state.posts, newPost];
    },
    setUser(state, action: PayloadAction<UserInfo>) {
      state.userInfo = action.payload;
    },
    isFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    setMediaResource(state, action: PayloadAction<string>) {
      state.mediaResource = action.payload;
    },
  },
});

export default profileSlice.reducer;
export const { addPost, setUser, isFetching, setMediaResource } =
  profileSlice.actions;
