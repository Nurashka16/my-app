import React from "react";
import style from "./Message.module.css";
import Avatar from "../../Common/Avatar";

const Message = (props) => {
  return (
    <div className={style.message}>
      <div className={style.container}>
        <div className={style.avatar}><Avatar url="" width="40px" height="40px" /></div>
        <div className={style.body}>
          <div className={style.upBlock}>
            <div className={style.name}>{props.name}</div>
            <div className={style.date}>{props.time}</div>
          </div>
          <div className={style.btBlock}>
            <div className={style.mess}>{props.mess}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
