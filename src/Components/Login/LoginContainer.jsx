import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { emailChanges, passwordChanges, signIn } from "../../redux/login-reducer";

const LoginContainer = (props) => {
  return (
    <Login signIn={props.signIn}
      email={props.email}
      password={props.password}
      emailChanges={props.emailChanges}
      passwordChanges={props.passwordChanges}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.loginPage.email,
    password: state.loginPage.password,
  };
};
export default connect(mapStateToProps, {
  emailChanges,
  signIn,
  passwordChanges,
})(LoginContainer);
