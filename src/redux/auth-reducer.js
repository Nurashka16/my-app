const SET_USER_DATA = "SET_USER_DATA";
const UPDATE_TEXT_INPUT = "UPDATE_TEXT_INPUT";

const initialState = {
  token: "",
  firstName: "мисми",
  lastName: "мипа",
  email: "авр",
  password: "авр",
  avatar: "",
  id: "вап",
  isAuth: true, // todo переделать
  /*"https://thypix.com/wp-content/uploads/2021/10/grey-anime-profile-picture-thypix-45-700x700.jpg"*/
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
    console.log("work");
      return {
        ...state,
        ...action.userData,
        isAuth : true,
      };
    }
    case UPDATE_TEXT_INPUT: {
      return {
        ...state,
        ...action.obj
      }
      
    };
    default:
      return state;
  }
};
export const setUserData = (userData) => ({
  type: SET_USER_DATA, userData
});
export const updateTextInput = (obj) => ({
  type: UPDATE_TEXT_INPUT,
  obj ,
})

export default authReducer;
