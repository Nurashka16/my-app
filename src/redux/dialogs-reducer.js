const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  messages: [
    {
      id: 1,
      message: "How are you?",
    },
    {
      id: 2,
      message: "Hi",
    },
    {
      id: 3,
      message: "What do you doing?",
    },
    {
      id: 4,
      message: "Hello!",
    },
    {
      id: 5,
      message: "ok",
    },
  ],
  dialogs: [
    {
      id: 1,
      name: "Sveta",
    },
    {
      id: 2,
      name: "Petya",
    },
    {
      id: 3,
      name: "Sasha",
    },
    {
      id: 4,
      name: "Kostya",
    },
  ],
  newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages]
      stateCopy.messages.push({ id: 6, message: body });
      stateCopy.newMessageBody = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = {...state};
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
