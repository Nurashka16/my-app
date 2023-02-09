import React from "react";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
   {(store) => {
        let state = store.getState().dialogsPage;
        return <Dialogs messages={state.messages}
        dialogs={state.dialogs} />
      }}
    </StoreContext.Consumer>
  );
};
