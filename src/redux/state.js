const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
    },
  },
  _callSubscriber() {
    console.log("Danya");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        number: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostText = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;
