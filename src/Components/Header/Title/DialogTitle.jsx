import React from "react";
import style from "./Title.module.css";
import {
  Icon28ArrowLeftOutline,
  Icon28PhoneOutline,
  Icon28MoreHorizontal,
} from "@vkontakte/icons";
import Avatar from "../../Common/Avatar";

const DialogTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container} style={{ paddingLeft: "8px" }}>
        <div className={style.title_content} style={{columnGap: "7px"}}>
          <div className={style.title_icon__left}>
            <Icon28ArrowLeftOutline />
          </div>
          <div className={style.avatar}><Avatar width={"36px"} height={"36px"}/></div>
          <div className={style.title_text__block} style={{marginLeft: "2px"}}>
            <div className={style.title_mini}>Имя собесед...</div>
            <div className={style.title_span__block}>
              <span className={style.title_span}>Последнее пос...</span>
              <div className={style.title_icon__near} style={{marginTop: "2px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12">
                  <path
                    d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0h3.98zm0 3H2a.5.5 0 0 0-.5.5v5c0 .28.23.5.5.5h4a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 6 3z"
                    fill="#C4C8CC"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={style.title_icon__right} style={{marginRight: "14px", columnGap: "22px"}}>
          <Icon28PhoneOutline /> <Icon28MoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default DialogTitle;
