import React from "react";
import { Title } from "./Title";
import { connect } from "react-redux";
import { closeBlock, openBlock } from "../../../redux/header-reducer";
import { useLocation } from "react-router-dom";
import { arrSelection } from "../../Common/Menu";

const TitleContainer = (props) => {
  const dataUrl = useLocation();
  console.log(props.contacts);
  const [_, url, userIdDialog] = dataUrl.pathname.split("/");
  const userDialog = props.contacts.find((user) => {
    if (user.id == userIdDialog) {
      return user;
    }
  });
  const list = arrSelection("title", userDialog?.fullName);

  return <Title list={list} url={url}  userDialog={userDialog}/>;
};
const mapStateToProps = (state) => {
  return {
    contacts: state.dialogsPage.contacts,
    block: state.headerPage.block,
    elemsBurger: state.headerPage.elemsBurger,
  };
};

export default connect(mapStateToProps)(TitleContainer);
