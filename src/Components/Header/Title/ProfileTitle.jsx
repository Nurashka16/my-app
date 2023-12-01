import React from "react";
import style from "./Title.module.css";
import { Icon28ServicesOutline, Icon28MoreHorizontal } from "@vkontakte/icons";

const ProfileTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.title_text}>Типа Ник</div>
          <div className={style.title_icon__right}>
            <div>
              <Icon28ServicesOutline />
            </div>
            <div>
              <Icon28MoreHorizontal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTitle;
