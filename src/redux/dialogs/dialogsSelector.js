export const getStateContacts = (state) => {
  return state.dialogs.contacts;
};
export const getStateDialog = (state) => {
  return state.dialogs.lastDialog;
};
export const getStateTextMessage = (state) => {
  return state.dialogs.textMessage;
};
