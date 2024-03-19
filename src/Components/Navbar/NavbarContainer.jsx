import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { navbarElements } from "./constants";

export const NavbarContainer = (props) => {
  return (
    <Navbar
      ownerId={props.ownerId}
      ownerFullName={props.ownerFullName}
      ownerAvatar={props.ownerAvatar}
      list={navbarElements}
      clearData={props.clearData}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    ownerId: state.authPage.id,
    ownerFullName: state.authPage.firstName + " " + state.authPage.lastName,
    ownerAvatar: state.authPage.avatar,
  };
};

export default connect(mapStateToProps)(NavbarContainer);
