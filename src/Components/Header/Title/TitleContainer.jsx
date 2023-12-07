import React from "react";
import { connect } from "react-redux";
import { closeBlock, openBlock } from "../../../redux/header-reducer";
import { useLocation } from "react-router-dom";
import Title from "./Title";

const TitleContainer = (props) => {
  const dataUrl = useLocation();
  const [_, url, userIdDialog] = dataUrl.pathname.split("/");
  const userDialog = props.contacts.find((user) => {
    if (user.id == userIdDialog) {
      return user;
    }
  });

  return (
    <Title
      url={url}
      userDialog={userDialog}
      ownerFullName={props.ownerFullName}
    />
  );
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
