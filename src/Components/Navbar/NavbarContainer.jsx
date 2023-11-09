import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { arrSelection } from "../Common/Menu";

export const NavbarContainer = (props) => {
  const list = arrSelection("navbar");
  return (
    <Navbar
      id={props.userId}
      userName={props.userName}
      userAvatar={props.userAvatar}
      list={list}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    userId: state.authPage.id,
    userName: state.authPage.firstName + " " + state.authPage.lastName,
    userAvatar: state.authPage.avatar,
  };
};

export default connect(mapStateToProps)(NavbarContainer);
