import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { arrSelection } from "../Common/Menu";
import { clearData } from "../../redux/auth-reducer";

export const NavbarContainer = (props) => {
  const list = arrSelection("navbar");
  return (
    <Navbar
      id={props.userId}
      userName={props.userName}
      userAvatar={props.userAvatar}
      list={list}
      clearData={props.clearData}
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

export default connect(mapStateToProps,{clearData})(NavbarContainer);
