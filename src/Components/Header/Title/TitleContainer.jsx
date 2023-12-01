import React from "react";
import { Title } from "./Title";
import { connect } from "react-redux";
import { closeBlock, openBlock } from "../../../redux/header-reducer";
import { useLocation } from "react-router-dom";
import { arrSelection } from "../../Common/Menu";
import TitleCopy from "./TitleCopy";


const TitleContainer = (props) => {
  const dataUrl = useLocation();
  const [_, url, userIdDialog] = dataUrl.pathname.split("/");
  const userDialog = props.contacts.find((user) => {
    if (user.id == userIdDialog) {
      return user;
    }
  });
  /*console.log(props.ownerFullName);*/
  const list = arrSelection("title", userDialog?.fullName, props.ownerFullName);

  return <TitleCopy list={list} url={url} userDialog={userDialog} />;
};
const mapStateToProps = (state) => {
  return {
    contacts: state.dialogsPage.contacts,
    block: state.headerPage.block,
    elemsBurger: state.headerPage.elemsBurger,
    ownerFullName: state.authPage.firstName + " " + state.authPage.lastName,
  };
};

export default connect(mapStateToProps)(TitleContainer);
