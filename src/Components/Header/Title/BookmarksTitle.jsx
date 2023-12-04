import React from "react";
import style from "./Title.module.css";
import { Icon28TagOutline } from "@vkontakte/icons";

const BookmarksTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container} style={{paddingLeft: "8px"}}>
        <div className={style.title_content}>
          <div className={style.title_mini}>Закладки</div>
        </div>
        <div className={style.title_icon__right}>
          <Icon28TagOutline />
        </div>
      </div>
    </div>
  );
};

export default BookmarksTitle;
