import React from "react";
import style from "./Wall.module.css";

const Content = ({img}) => {
  return (
    <div className={style.main}>
      {img && (
        <div className={style.wrap}>
          <img className={style.wrap_img} src={img} alt="" />
        </div>
      )}
    </div>
  );
};

export default Content;
