import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Dialog from "./Dialog";

export const DialogContainer = (props) => {
  const { id } = useParams();
  const user = props.contacts.filter((item) => item.id == id);
  return (
    <Dialog
      name={user[0].fullName}
      user={props.user}
      lastDialog={props.lastDialog}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.dialogsPage.contacts,
    lastDialog: state.dialogsPage.lastDialog,
    user: state.profilePage.user,
  };
};

export default connect(mapStateToProps)(DialogContainer);
