import React from "react";
import style from "./MiniTablWithoutFix.module.css";

const MiniTablWithoutFix = ({
  ref,
  children,
  width,
  height,
  radius,
  border = null,
  position,
  padding = "8px 0",
  left,
  right,
  top,
  bottom,
  index="30"
}) => {
  return (
    <div
      ref={ref}
      className={style.block}
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
        index
      }}
    >
      {children}
    </div>
  );
};

export default MiniTablWithoutFix;
