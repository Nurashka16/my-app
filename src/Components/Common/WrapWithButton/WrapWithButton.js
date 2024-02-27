import React from "react";
import style from "./WrapWithButton.module.css";
import { Icon20Cancel } from "@vkontakte/icons";

const WrapWithButton = ({
  ref,
  children,
  radius,
  border = null,
  padding = "0",
  margin,
  marginTop,
  isShow,
  setShow,
}) => {
  return (
    <div ref={ref} className={style.block}>
      <div
        className={style.container}
        style={{
          padding: padding,
          borderRadius: radius,
          border: border,
          margin: margin,
          marginTop: marginTop,
        }}
      >
        {children}
        <div className={style.btn_close} onClick={() => setShow(!isShow)}>
          <Icon20Cancel />
        </div>
      </div>
    </div>
  );
};

export default WrapWithButton;
