import React from "react";
import { Icon16Dropdown } from "@vkontakte/icons";
import style from "./Title.module.css";

const NewsTitle = () => {
  return (
    <div className={style.title}>
      <div
        className={style.title_container}
        style={{
          paddingLeft: "9px",
        }}
      >
        <div className={style.title_content}>
          <div className={style.title_text}>Новости</div>
          <div className={style.title_icon__near}>
            <Icon16Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTitle;
