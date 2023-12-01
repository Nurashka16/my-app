import React from "react";
import style from "./Title.module.css";
import { Icon28TagOutline } from "@vkontakte/icons";

const BookmarksTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.title_text}>Закладки</div>
          <div className={style.title_icon}>
            <Icon28TagOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarksTitle;
