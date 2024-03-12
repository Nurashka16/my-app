import React from "react";
import style from "./Tab.module.css";

const Tab = ({ value, iconLeft, iconRight, children, isActive, onClick}) => {
  return (
    <div  className={isActive ? style.isActive : style.button} onClick={(()=>onClick(value))}>
      <div className={style.content}>
        {iconLeft && <div className={style.iconLeft}>{iconLeft}</div>}
        <div className={style.text}>{children}</div>
      </div>
      {iconRight && <div className={style.iconRight}>{iconRight}</div>}
    </div>
  );
};

export default Tab;
