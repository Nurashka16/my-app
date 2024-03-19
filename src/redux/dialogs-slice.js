import { createSlice } from "@reduxjs/toolkit";

const dialogsSlice = createSlice({
  name: "dialogs",
  initialState: {
    lastDialog: [
      {
        id: 1,
        user: "Nura",
        mess: "HI!",
        time: "10:21",
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
    newMessageBody: "",
  },
  reducers: {
    sendMessage(state, action) {
      let body = state.newMessageBody;
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push({ id: 6, message: body });
      stateCopy.newMessageBody = "";
      return stateCopy;
    },
    updateNewMessageBody(state, action) {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    },
  },
});

export default dialogsSlice.reducer;
export const { sendMessage, updateNewMessageBody } = dialogsSlice.actions;
