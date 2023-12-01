import React from "react";
import style from "./Title.module.css";
import {
   Icon16Dropdown, Icon24Add
 } from "@vkontakte/icons";

const CommunitiesTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.title_text}>Сообщества</div>
          <div className={style.title_icon_near}><Icon16Dropdown /></div>
          <div className={style.title_icon_right}><Icon24Add /></div>
        </div>
      </div>
    </div>
  );
};

export default CommunitiesTitle;
