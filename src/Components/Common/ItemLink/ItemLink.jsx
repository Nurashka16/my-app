import React, { useState } from "react";
import style from "./ItemLink.module.css";

const ItemLink = ({
  iconLeft,
  text,
  id,
  iconRight,
  padding = "5px 16px",
  margin,
  borderBottom,
  colorIcon,
  colorText,
  paddingIcon,
  height,
  border,
  radius,
  boxShadow,
  fontSize,
  fontWeight,
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
        paddingIcon: paddingIcon,
        height: height,
        border: border,
        borderRadius: radius,
        boxShadow: boxShadow,
      }}
      key={id}
    >
      <div className={style.content}>
        {iconLeft && (
          <div
            className={style.icon}
            style={{
              padding: paddingIcon,
              color: colorIcon,
            }}
          >
            {iconLeft}
          </div>
        )}
        <div
          style={{
            color: colorText,
            fontSize: fontSize,
            fontWeight: fontWeight,
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
            padding: paddingIcon,
            color: colorIcon,
          }}
        >
          {iconRight}
        </div>
      )}
    </div>
  );
};

export default ItemLink;
