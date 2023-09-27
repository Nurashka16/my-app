import React from "react";
import SignIn from "./SignIn";
import { connect } from "react-redux";
import {
  changeEmail,
  changePassword,
  signIn,
} from "../../../../../redux/auth-reducer";


const SignInContainer = (props) => {
  return (
    <SignIn
      signIn={props.signIn}
      email={props.email}
      password={props.password}
      changeEmail={props.changeEmail}
      changePassword={props.changePassword}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.authPage.email,
    password: state.authPage.password,
  };
};
export default connect(mapStateToProps, {
  changeEmail,
  signIn,
  changePassword,
})(SignInContainer);
