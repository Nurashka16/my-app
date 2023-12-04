import React from "react";
import { Icon16Dropdown, Icon24Add } from "@vkontakte/icons";
import style from "./Title.module.css";

const FriendsTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.title_text}>Все друзья</div>
          <span className={style.title_amount}>0</span>
          <div className={style.title_icon__near} style={{marginTop: "1px"}}>
            <Icon16Dropdown />
          </div>
        </div>
        <div className={style.title_icon__right} style={{marginRight: "20px"}}>
          <Icon24Add />
        </div>
      </div>
    </div>
  );
};

export default FriendsTitle;
