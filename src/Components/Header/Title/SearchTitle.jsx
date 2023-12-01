import React from "react";
import { Icon28ArrowLeftOutline } from "@vkontakte/icons";
import style from "./Title.module.css";

const SearchTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.title_icon__left}>
            <Icon28ArrowLeftOutline />
          </div>
          <div className={style.text}>Поиск</div>
        </div>
      </div>
    </div>
  );
};

export default SearchTitle;
