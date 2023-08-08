const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  info: "",
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  avatar: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      console.log(action);
      return {
        ...state,
        data: action.data,
      };
    }

    default:
      return state;
  }
};
export const setUserData = (firstName, lastName, email, password,
   avatar) => ({
  type: SET_USER_DATA,
  data: { firstName, lastName, email, password, avatar },
});

export default authReducer;
