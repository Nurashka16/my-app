import React from "react";
import SignIn from "./SignIn";
import { connect } from "react-redux";
import {
  changeEmail,
  changePassword,
  signIn,
} from "../../../../../redux/auth-reducer";
import { useNavigate } from "react-router-dom";

const SignInContainer = (props) => {
  const navigate = useNavigate();
  const signIn = async (email, password) => {
    const signInResult = await props.signIn(email, password);
    if (signInResult.isSuccess) {
      navigate("/");
    }
  };

  return (
    <SignIn
      signIn={signIn}
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
