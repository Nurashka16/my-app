const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_FETCHING = "IS_FETCHING";

let initialState = {
  users: [],
  pageSize: 4,
  totalCount: 20,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, follow: false };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, follow: true };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case SET_IS_FETCHING: 
     return {
      ...state, isFetching: action.value,
     }
    default:
      return state;
    
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setIsFetchingAC = (value) => ({ type: SET_IS_FETCHING, value });

export default usersReducer;
