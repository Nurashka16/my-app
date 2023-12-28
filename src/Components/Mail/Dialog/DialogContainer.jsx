import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Dialog from "./Dialog";
import {getStateLastDialog, getStateContacts, getStateUserInfo} from "../../Common/Selector";

export const DialogContainer = (props) => {
  const { id } = useParams();
  const user = props.contacts.filter((item) => item.id == id);
  return (
    <Dialog
      name={user[0].firstName}
      lastDialog={props.lastDialog}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: getStateContacts(state),
    lastDialog: getStateLastDialog(state),
  };
};

export default connect(mapStateToProps)(DialogContainer);
