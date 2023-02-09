const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 3,
            message: state.newPostText,
            number: 0,
          };
          state.posts.push(newPost);
          state.newPostText = "";
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
      default:
         return state;
   }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;