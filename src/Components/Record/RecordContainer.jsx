import React from "react";
import Record from "./Record";
import { connect } from "react-redux";
import { setUserData, updateTextInput } from "../../redux/auth-reducer";
import axios from "axios";

class RecordContainer extends React.Component {
  componentDidMount() {

  }
  register() {
    const request = {
      firstName: this.authPage.firstName,
      lastName: this.authPage.lastName,
      email: this.authPage.email,
      password: this.authPage.password,
      avatar: this.authPage.avatar,
    };

    axios
      .post(`http://127.0.0.1:5298/auth/register`, request)
      .then((response) => {
         this.setUserData(response.data);
      })
      .catch((response) => {
        console.log(response);
      });

      console.log(this.authPage);
  }
  render() {
    const onChangeHandler = (e) => {
      const obj = {
        [e.target.name]: e.target.value,
      };
      this.props.updateTextInput(obj);
    };
    const listToFill = [
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
      <Record
        {...this.props}
        register={this.register}
        listToFill={listToFill}
        onChangeHandler={onChangeHandler}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    authPage: state.authPage,
    listToFill: state.authPage.listToFill,
  };
};

export default connect(mapStateToProps, { setUserData, updateTextInput })(
  RecordContainer
);
