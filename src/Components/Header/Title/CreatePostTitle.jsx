import React from "react";
import style from "./Title.module.css";
import { Icon28ArrowLeftOutline } from "@vkontakte/icons";

const CreatePostTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.title_icon_left}>
            <Icon28ArrowLeftOutline />
          </div>
          <div className={style.title_text}>Новая запись</div>
          <span className={style.title_span}>Имя владельца</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePostTitle;
