import React from "react";
import { connect } from "react-redux";
import Friends from "./Friends";


let mapStateToProps = (state) => {
  return {
    friendsPage: state.friendsPage
  }
}

export const FriendsContainer = connect(mapStateToProps)(Friends);
