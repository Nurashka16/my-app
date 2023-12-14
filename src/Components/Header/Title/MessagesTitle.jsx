import React from "react";
import style from "./Title.module.css";
import { Icon16Dropdown, Icon28WriteSquareOutline } from "@vkontakte/icons";

const MessagesTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.title_text}>Чаты</div>
          <div className={style.title_icon__near} style={{marginTop: "1px"}}>
            <Icon16Dropdown />
          </div>
        </div>
        <div className={style.title_icon__right} style={{marginRight: "16px"}}>
          <Icon28WriteSquareOutline />
        </div>
      </div>
    </div>
  );
};

export default MessagesTitle;
