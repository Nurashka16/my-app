import React from "react";
import style from "./Title.module.css";

const GamesTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container} style={{paddingLeft: "8px"}}>
        <div className={style.title_content}>
          <div className={style.title_mini}>Игры</div>
        </div>
      </div>
    </div>
  );
};

export default GamesTitle;
