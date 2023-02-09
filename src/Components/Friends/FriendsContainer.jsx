import React from "react";
import StoreContext from "../../StoreContext";
import Friends from "./Friends";

export const FriendsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().friendsPage;
        return <Friends profile={state.profile}/>
      }}
    </StoreContext.Consumer>
  );
};
