import React from "react";
import style from "./Title.module.css";

const MusicsTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container} style={{paddingLeft: "8px"}}>
        <div className={style.title_content}>
          <div className={style.title_mini}>Главная</div>
        </div>
      </div>
    </div>
  );
};

export default MusicsTitle;
