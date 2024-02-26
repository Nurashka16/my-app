import React from "react";
import style from "./WrapWithoutFix.module.css";

const MiniTablWithoutFix = ({
  margin,
  ref,
  children,
  width,
  height,
  radius,
  border = null,
  position,
  padding ="0",
  left,
  right,
  top,
  bottom,
  index="30",
  boxShadow
  
}) => {
  return (
    <div
      ref={ref}
      className={style.block}
      style={{
        margin: margin,
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
        index: index,
        boxShadow: boxShadow
      }}
    >
      {children}
    </div>
  );
};

export default MiniTablWithoutFix;
