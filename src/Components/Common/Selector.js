//переписать с использованием хука useSelector
//из authPage

export const getStateOwnerAvatar = (state) => {
  return state.authPage.avatar;
};
export const getStateOwnerEmail = (state) => {
  return state.authPage.email;
};
export const getStateOwnerPassword = (state) => {
  return state.authPage.password;
};
export const getStateOwnerId = (state) => {
  return state.authPage.id;
};
export const getStateOwnerFirstName = (state) => {
  return state.authPage.firstName;
};
export const getStateOwnerLastName = (state) => {
  return state.authPage.lastName;
};
export const getStateOwnerFullName = (state) => {
  return getStateOwnerFirstName(state) + " " + getStateOwnerLastName(state);
};

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

export const getStateContacts = (state) => {
  return state.dialogsPage.contacts;
};
export const getStateLastDialog = (state) => {
  return state.dialogsPage.lastDialog;
};
