import React from "react";
import style from "./Title.module.css";

const RecommendationTitle = () => {
  return (
    <div className={style.title}>
      <div className={style.title_container}>
        <div className={style.title_content}>
          <div className={style.title_text}>Рекомендации</div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationTitle;
