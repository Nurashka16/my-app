import React from "react";
import { connect } from "react-redux";
import CreatePost from "./CreatePost";
import { addPost } from "../../redux/profile/profile-slice";

export const NavbarContainer = () => {
  return <CreatePost props={addPost} />;
};

export default connect({ addPost })(NavbarContainer);
