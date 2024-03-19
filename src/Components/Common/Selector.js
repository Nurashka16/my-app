//переписать с использованием хука useSelector
//из authPage



//из profilePage

export const getStatePosts = (state) => {
  return state.profilePage.posts;
};

export const getStateUserInfo = (state) => {
  return state.profilePage.userInfo;
};
export const getStateIsFetching = (state) => {
  return state.profilePage.isFetching;
};

//из dialogsPage


