export const getStateIsAuth = (state) => {
  return state.auth.owner.isAuth;
};
export const getStateOwnerAvatar = (state) => {
  return state.auth.owner.avatar;
};
export const getStateOwnerEmail = (state) => {
  return state.auth.owner.email;
};
export const getStateOwnerPassword = (state) => {
  return state.auth.owner.password;
};
export const getStateOwnerId = (state) => {
  return state.auth.owner.id;
};
export const getStateOwnerFirstName = (state) => {
  return state.auth.owner.firstName;
};
export const getStateOwnerLastName = (state) => {
  return state.auth.owner.lastName;
};
export const getStateOwnerFullName = (state) => {
  return getStateOwnerFirstName(state) + " " + getStateOwnerLastName(state);
};
