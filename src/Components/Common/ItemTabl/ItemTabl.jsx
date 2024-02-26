import React, { useState } from "react";
import style from "./ItemTabl.module.css";

const ItemTabl = ({
  iconLeft,
  text,
  id,
  iconRight,
  padding = "5px 16px",
  margin,
  borderBottom,
  colorIcon,
  colorText,
}) => {
  return (
    <div
      className={style.link}
      style={{
        colorIcon: colorIcon,
        colorText: colorText,
        padding: padding,
        margin: margin,
        borderBottom: borderBottom,
      }}
      key={id}
    >
      <div className={style.content}>
        {iconLeft && (
          <div
            className={style.icon}
            style={{
              color: colorIcon,
            }}
          >
            {iconLeft}
          </div>
        )}
        <div
          style={{
            color: colorText,
          }}
          className={style.text}
        >
          {text}
        </div>
      </div>
      {iconRight && (
        <div
          className={style.icon_right}
          style={{
            color: colorIcon,
          }}
        >
          {iconRight}
        </div>
      )}
    </div>
  );
};

export default ItemTabl;
