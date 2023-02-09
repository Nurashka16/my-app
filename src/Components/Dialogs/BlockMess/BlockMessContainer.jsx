import React from "react";
import {
  sendMessageCreator,
  updateNewMessageCreator,
} from "../../../redux/dialogs-reducer";
import StoreContext from "../../../StoreContext";
import BlockMess from "./BlockMess";

const BlockMessContainer = (props) => {

  return (
    <StoreContext.Consumer> 
      {(store) => {
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageCreator(body));
        };
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };
        return <BlockMess
            updateNewMessageCreator={onNewMessageChange}
            sendMessageCreator={onSendMessageClick}
            newMessageBody={store.getState().newMessageBody}
          />
      }
    }
    </StoreContext.Consumer>
  );
};

export default BlockMessContainer;
