import React from "react";
import style from "./Recommendation.module.css";

const Recommendation = (avatar, fullName, icon = "") => {
  return (
    <div className={style.recommendation}>
      <div className={style.recommendation_container}>
        <div className={style.recommendation_avatar}>{avatar}</div>
        <div className={style.recommendation_info}>
          <div className={style.recommendation_name}>{fullName}</div>
          <div className={style.recommendation_buttons}>
            <div className={style.recommendation_buttons_add}></div>
            <div className={style.recommendation_buttons_hide}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
