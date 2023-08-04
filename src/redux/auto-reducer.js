const SET_USER = "SET_USER";

let initialState = {
   data: "",
};

const autoReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER: {
         return {
            ...state , 
            data: action.data,
         }
      };
   
      default:
        return state;
   }
}
const setUserAC = (id, login, email) => ({
   type: SET_USER, 
   data: {id, login, email },
})
export default autoReducer;
