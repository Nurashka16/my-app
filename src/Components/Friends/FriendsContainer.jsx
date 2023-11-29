import React from "react";
import { connect } from "react-redux";
import Friends from "./Friends";
import { closeBlock, openBlock} from "../../redux/friends-reducer";


let mapStateToProps = (state) => {
  return {
    friendsPage: state.friendsPage,
    profiles: state.friendsPage.profile
  }
}

export const FriendsContainer = connect(mapStateToProps, {
  closeBlock, openBlock
})(Friends);
