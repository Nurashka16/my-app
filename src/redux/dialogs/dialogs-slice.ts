import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Contact, Message } from "../../app/types/dialogs";

interface DialogsState {
  dialog: Array<Message>;
  contacts: Array<Contact>;
  textMessage: string;
}
const initialState: DialogsState = {
  dialog: [
    {
      id: 1,
      user: "Nura",
      mess: "HI!",
      time: "10:21",
      avatar: "",
    },
    {
      id: 2,
      user: "Danya",
      avatar: "",
      mess: "HI!",
      time: "10:21",
    },
    {
      id: 3,
      user: "Nura",
      avatar: "",
      mess: "HDY?",
      time: "10:21",
    },
    {
      id: 4,
      user: "Danya",
      avatar: "",
      mess: "Nice, and you?",
      time: "10:21",
    },
  ],
  contacts: [
    {
      id: 1,
      fullName: "Ananasik",
      avatar: "",
      lastMess: "You: HI!",
      time: "10:21",
      login: "phone",
    },
    {
      id: 2,
      fullName: "Granatus",
      avatar: "",
      lastMess: "He: Okay",
      time: "Tomorrow in 20:35",
      login: "",
    },
    {
      id: 3,
      fullName: "Bubuz",
      avatar: "",
      lastMess: "She: Good",
      time: "22 sep in 16:20",
      login: "",
    },
    {
      id: 4,
      fullName: "Vinogradka",
      avatar: "",
      lastMess: "You: No, i don`t",
      time: "10 jule 2021",
      login: "phone",
    },
    {
      id: 5,
      fullName: "Yablych",
      avatar: "",
      lastMess: "He: Thunk",
      time: "3 years ago",
      login: "",
    },
  ],
  textMessage: "",
};
const dialogsSlice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    sendMessage(state, action: PayloadAction<string>) {
      const newMessage: Message = {
        id: state.dialog.length + 1,
        user: "",
        mess: action.payload,
        time: "",
        avatar: "",
      };
      state.dialog = [...state.dialog, newMessage];
    },
    updateNewMessageBody(state, action: PayloadAction<string>) {
      state.textMessage = action.payload;
    },
  },
});

export default dialogsSlice.reducer;
export const { sendMessage, updateNewMessageBody } = dialogsSlice.actions;
