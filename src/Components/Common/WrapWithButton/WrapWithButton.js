import React from "react";
import style from "./WrapWithButton.module.css";

const WrapWithButton = ({
  ref,
  children,
  width,
  height,
  radius,
  border = null,
  position,
  padding = "0",
  left,
  right,
  top,
  bottom,
  index = "30",
}) => {
  return (
    <div ref={ref} className={style.block}>
      <div
        className={style.container}
        style={{
          position: position,
          padding: padding,
          width: width,
          height: height,
          borderRadius: radius,
          border: border,
          left: left,
          right: right,
          top: top,
          bottom: bottom,
          index,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default WrapWithButton;
