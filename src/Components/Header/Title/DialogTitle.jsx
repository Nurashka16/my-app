import React from "react";
import style from "./Title.module.css";
import {
  Icon28ArrowLeftOutline,
  Icon28PhoneOutline,
  Icon28MoreHorizontal,
} from "@vkontakte/icons";

const DialogTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.title_icon_left}>
            <Icon28ArrowLeftOutline />
          </div>
          <div className={style.title_text}>Имя собеседника</div>
          <span className={style.title_span}>Последнее посещение</span>
          <div className={style.title_icon_near}>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12">
              <path
                d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0h3.98zm0 3H2a.5.5 0 0 0-.5.5v5c0 .28.23.5.5.5h4a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 6 3z"
                fill="#C4C8CC"
              ></path>
            </svg>
          </div>
          <div className={style.title_icon_right}>
            <Icon28PhoneOutline /> <Icon28MoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogTitle;
