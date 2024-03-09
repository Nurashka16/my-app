import React from "react";
import style from "./Tab.module.css";

const Tab = ({ iconLeft, id, iconRight, children }) => {
  // :
  return (
    <div className={id == 1 ? style.isActive : style.button} key={id}>
      <div className={style.content}>
        {iconLeft && <div className={style.iconLeft}>{iconLeft}</div>}
        <div className={style.text}>{children}</div>
      </div>
      {iconRight && <div className={style.iconRight}>{iconRight}</div>}
    </div>
  );
};

export default Tab;
