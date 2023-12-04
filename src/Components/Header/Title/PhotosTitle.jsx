import React from "react";
import style from "./Title.module.css";
import { Icon28ArrowLeftOutline } from "@vkontakte/icons";

const PhotosTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container} style={{paddingLeft: "7.5px"}}>
        <div className={style.title_content}>
          <div className={style.title_icon__left}>
            <Icon28ArrowLeftOutline />
          </div>
          <div className={style.title_text}>Мои фотографии</div>
        </div>
      </div>
    </div>
  );
};

export default PhotosTitle;
