import React from "react";
import style from "./Title.module.css";
import { Icon16Dropdown } from "@vkontakte/icons";

const NoticeTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.title_text}>Уведомления</div>
          <div className={style.title_icon__near} style={{marginTop: "1px"}}>
            <Icon16Dropdown />
          </div>
        </div>
        <div className={style.title_icon__right} style={{marginRight: "16px"}}>
          <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h28v28H0z"></path>
              <path
                d="M18.5 15a3.5 3.5 0 0 1 3.35 2.5H24a1 1 0 0 1 0 2h-2.15a3.5 3.5 0 0 1-6.7 0H4a1 1 0 0 1 0-2h11.14A3.5 3.5 0 0 1 18.5 15zm0 1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM10.5 6a3.5 3.5 0 0 1 3.35 2.5H24a1 1 0 0 1 0 2H13.86a3.5 3.5 0 0 1-6.71 0H4a1 1 0 0 1 0-2h3.15A3.5 3.5 0 0 1 10.5 6zm0 1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5z"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NoticeTitle;
