import React from "react";
import style from "./Title.module.css";
import {
   Icon16Dropdown,
 } from "@vkontakte/icons";

const NewsTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.text}>Ссылка на клипы</div>
        </div>
      </div>
    </div>
  );
};

export default NewsTitle;
