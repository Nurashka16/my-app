const OPEN_BLOCK = "OPEN_BLOCK";
const CLOSE_BLOCK = "CLOSE_BLOCK";

let initialState = {
  block: false,
};

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_BLOCK:
      console.log("open");
      return {
        ...state,
        block: true,
      };
    case CLOSE_BLOCK: {
      console.log("close");
      return {
        ...state,
        block: false,
      };
    }
    default:
      return state;
  }
}

export const openBlock = () => ({
  type: OPEN_BLOCK,
})
export const closeBlock = () => ({
  type: CLOSE_BLOCK,
})

export default headerReducer;
