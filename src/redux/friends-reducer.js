const OPEN_BLOCK = "OPEN_BLOCK";
const CLOSE_BLOCK = "CLOSE_BLOCK";

let initialState = {
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
  ],
  block: false,
};
function friendsReducer(state = initialState, action) {
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

export default friendsReducer;
