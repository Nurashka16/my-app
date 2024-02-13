const SEND_MESSAGE = "SEND-MESSAGE";
const ADD_TEXT = "ADD_TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push({ id: 6, message: body });
      stateCopy.newMessageBody = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
