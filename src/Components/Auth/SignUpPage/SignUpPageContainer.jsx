import React from "react";
import SignUpPage from "./SignUpPage";
import { signUpPageSelector } from "./signUpPageSelector";
import { connect } from "react-redux";
import {
  registerUser,
  changeInputRegister,
  signUp,
} from "../../../redux/auth-reducer";

class SignUpPageContainer extends React.Component {
  register() {
    const request = signUpPageSelector(this);
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
        text: "Эл.почта",
        name: "email",
      },
      {
        id: 4,
        text: "Пароль",
        name: "password",
      },
      {
        id: 5,
        text: "Аватар",
        name: "avatar",
      },
    ];
    return (
      <SignUpPage
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

export default connect(mapStateToProps, { registerUser, changeInputRegister,
   signUp })(
  SignUpPageContainer
);
