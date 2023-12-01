import React from "react";
import { Icon16Dropdown } from "@vkontakte/icons";
import style from "./Title.module.css";

const VideosTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.title_text}>Видео</div>
        </div>
      </div>
    </div>
  );
};

export default VideosTitle;
