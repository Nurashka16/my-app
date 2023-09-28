import React from "react";
import SignUp from "./SignUp";
import { SignUpSelector } from "./SignUpSelector";
import { connect } from "react-redux";
import {
  registerUser,
  changeInputRegister,
  signUp,
} from "../../../../../redux/auth-reducer";

class SignUpContainer extends React.Component {
  register() {
    const request = SignUpSelector(this);
    this.signUp(request);
  }
  render() {
    const onChangeHandler = (e) => {
      const obj = {
        [e.target.name]: e.target.value,
      };
      this.props.changeInputRegister(obj);
    };
    const inputFields = [
      {
        id: 1,
        text: "Имя",
        name: "firstName",
      },
      {
        id: 2,
        text: "Фамилия",
        name: "lastName",
      },
      {
        id: 3,
        text: "Электронная почта",
        name: "email",
      },
      {
        id: 4,
        text: "Пароль",
        name: "password",
      },
    ];
    return (
      <SignUp
        {...this.props}
        register={this.register}
        inputFields={inputFields}
        onChangeHandler={onChangeHandler}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    authPage: state.authPage,
  };
};

export default connect(mapStateToProps, {
  registerUser,
  changeInputRegister,
  signUp,
})(SignUpContainer);
