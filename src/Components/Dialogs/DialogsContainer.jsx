import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

export const DialogsContainer = connect(mapStateToProps)(Dialogs);
