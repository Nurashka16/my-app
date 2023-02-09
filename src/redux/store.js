import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Hi!",
          number: 5,
        },
        {
          id: 2,
          message: "How are you?",
          number: 10,
        },
      ],
      newPostText: "danya kaka",
    },
    dialogsPage: {
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
    },
    friendsPage: {
      profile: [
        {
          id: 1,
          url: "https://pbs.twimg.com/media/EwclWpAWUAEBKhD.jpg",
          name: "Brendon Freizer",
          age: 22,
        },
        {
          id: 2,
          url: "https://i.pinimg.com/236x/de/49/4c/de494ce291614e551029daa9ba0d6c4c.jpg",
          name: "Yellow Mitchel",
          age: 20,
        },
        {
          id: 3,
          url: "https://i.pinimg.com/originals/f3/cc/78/f3cc7882dd9be49a919c9173cf281414.jpg",
          name: "Opra Akentukish",
          age: 25,
        },
      ]
    }
  },
  _callSubscriber() {
    console.log("Danya");
  },

  // getState() {
  //   return this._state;
  // },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
