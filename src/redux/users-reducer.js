import UsersAPI from "../API/UsersAPI";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_FETCHING = "IS_FETCHING";
const IN_PROGRESS_OF_SWITCHING = "IN_PROGRESS_OF_SWITCHING";

let initialState = {
  users: [],
  pageSize: 4,
  totalCount: 20,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
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
    }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.value,
      };
    case IN_PROGRESS_OF_SWITCHING:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setIsFetching = (value) => ({ type: SET_IS_FETCHING, value });
export const inProgressOfSwitching = (isFetching, userId) => ({
  type: IN_PROGRESS_OF_SWITCHING,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  UsersAPI.getUsers(currentPage, pageSize).then((response) => {
    dispatch(setIsFetching(false));
    dispatch(setUsers(response.data));
  });
};

export const setFollow = (userId, boolean) => (dispatch) => {
  dispatch(inProgressOfSwitching(true, userId));
  UsersAPI.isFollowed(userId.value, boolean)
    .then((response) => { 
      boolean ? dispatch(unfollow(userId)) : dispatch(follow(userId));
    dispatch(inProgressOfSwitching(false, userId));
    })
    .catch((response) => {
      console.log("ошибка в unfollow");
    });
};

export default usersReducer;
