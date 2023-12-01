import React from "react";
import style from "./Title.module.css";
import {
   Icon16Dropdown,
 } from "@vkontakte/icons";

const MessagesTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.title_text}>Чаты</div>
          <div className={style.title_icon}><Icon16Dropdown /></div>
        </div>
      </div>
    </div>
  );
};

export default MessagesTitle;
