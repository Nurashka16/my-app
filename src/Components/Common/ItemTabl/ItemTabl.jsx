import React, { useState } from "react";
import style from "./ItemTabl.module.css";

const ItemTabl = ({ iconLeft, text, id, iconRight, padding="5px 16px", margin, borderBottom }) => {
  return (

    <div className={style.link} style={{padding: padding,margin: margin, borderBottom: borderBottom}} key={id}>
      <div className={style.content}>
        {iconLeft && <div className={style.icon}>{iconLeft}</div>}
        <div className={style.text}>{text}</div>
      </div>
      {iconRight && <div className={style.icon_right}>{iconRight}</div>}
    </div>
  );
};

export default ItemTabl;
