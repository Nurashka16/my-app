import React from "react";
import SignIn from "./SignIn";
import { connect } from "react-redux";
import { signIn } from "../../../../../redux/auth-reducer";
import { useNavigate } from "react-router-dom";
import {getStateOwnerEmail, getStateOwnerId} from '../../../../Common/Selector';

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
    />
  );
};

const mapStateToProps = (state) => {
  return {
    email: getStateOwnerEmail(state),
    password: getStateOwnerEmail(state)
  };
};
export default connect(mapStateToProps, {
  signIn,
})(SignInContainer);
