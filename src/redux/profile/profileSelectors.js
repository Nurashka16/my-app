export const getStateMyPosts = (state) => {
  return state.profile.posts;
};
export const getStateUser = (state) => {
  return state.profile.user;
};
export const getStateIsFetching = (state) => {
  return state.profile.isFetching;
};
export const getStateUserInfo= (state) => {
  return state.profile.userInfo;
};
export const getStateProfileInfo = (state) => {
  return state.profile.ProfileInfo;
};
export const getStateFriends = (state) => {
  return state.profile.friends;
};
export const getStateFriendsCount = (state) => {
  return state.profile.friendsCount;
};
export const getStateMediaResource = (state) => {
  return state.profile.mediaResource;
};
