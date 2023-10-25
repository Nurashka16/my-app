import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

export const NavbarContainer = (props) => {
  
  console.log(props.userName);
  return <Navbar id={props.userId} userName={props.userName} 
  userAvatar={props.userAvatar}/>;
};
const mapStateToProps = (state) => {
  return {
    userId: state.authPage.id,
    userName: state.authPage.firstName + " " + state.authPage.lastName,
    userAvatar: state.authPage.avatar,
  };
};

export default connect(mapStateToProps)(NavbarContainer);
