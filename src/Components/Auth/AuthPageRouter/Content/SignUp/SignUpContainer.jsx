import React from "react";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import { registerUser, signUp } from "../../../../../redux/auth-reducer";
import { useNavigate } from "react-router-dom";

const SignUpContainer = (props) => {
  const navigate = useNavigate();
  const signUp = async (firstName, lastName, email, password, avatar) => {
    const signUpResult = await props.signUp(
      firstName,
      lastName,
      email,
      password,
      avatar
    );
    console.log(signUpResult);
    if (signUpResult.isSuccess) {
      navigate("/");
    }
  };

  return <SignUp registerUser={props.registerUser} signUp={signUp} />;
};
let mapStateToProps = (state) => {
  return {
    authPage: state.authPage, //не нужен
  };
};

export default connect(mapStateToProps, {
  registerUser,
  signUp,
})(SignUpContainer);
