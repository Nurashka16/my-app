import React from "react";
import style from "./Title.module.css";
import { Icon28ArrowLeftOutline } from "@vkontakte/icons";
import ButtonBack from "../../Common/ButtonBack";

const CreatePostTitle = (props) => {
  return (
    <div className={style.title}>
      <div className={style.title_container} style={{paddingLeft: "7.5px"}}>
        <div className={style.title_content}>
          <div className={style.title_icon__left}>
            <ButtonBack children={<Icon28ArrowLeftOutline/>}/>
          </div>
          <div className={style.title_text__block} style={{marginBottom: "2px"}}>
            <div className={style.title_mini} style={{fontSize: "17px"}}>Новая запись</div>
            <span className={style.title_span}>Имя владельца</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostTitle;
