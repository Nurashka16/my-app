import React from "react";
import style from "./Title.module.css";
import { Icon28ServicesOutline, Icon28MoreHorizontal } from "@vkontakte/icons";

const ProfileTitle = () => {
  return (
    <div className={style.title}>
      <div
        className={style.title_container}
        style={{
          paddingTop: "16.5px",
          paddingLeft: "4.5px",
        }}
      >
        <div className={style.title_content}>
          <div
            className={style.title_text}
            style={{
              fontWeight: "500",
              fontSize: "19px",
            }}
          >
            @nik
          </div>
        </div>
        <div
          className={style.title_icon__right}
        >
          <div
            className={style.title_icon__black}
            style={{
              paddingBottom: "0.5px",
            }}
          >
            <Icon28ServicesOutline />
            <Icon28MoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTitle;
