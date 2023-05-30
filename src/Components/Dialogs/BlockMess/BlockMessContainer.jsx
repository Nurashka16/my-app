import React from "react";
import {
  sendMessageCreator,
  updateNewMessageCreator,
} from "../../../redux/dialogs-reducer";
import BlockMess from "./BlockMess";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageCreator(body));
    }
  }
}
const BlockMessContainer = connect(mapStateToProps, mapDispatchToProps)(BlockMess);

export default BlockMessContainer;
