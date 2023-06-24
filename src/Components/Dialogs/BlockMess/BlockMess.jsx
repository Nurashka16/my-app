import React from "react";
import style from "./BlockMess.module.css";
const BlockMess = (props) => {
  let newMessageBody = props.newMessageBody;
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  let onSendMessageClick = () => {
    props.sendMessage();
  };
  return (
    <div className={style.blockMess}>
      <textarea
      value={props.dialogsPage.newMessageBody}
        onChange={onNewMessageChange}
        placeholder="Enter Your Message"
        className={style.textArea}
      ></textarea>
      <button onClick={onSendMessageClick} className={style.button}>
        Send
      </button>
    </div>
  );
};

export default BlockMess;
