import React from "react";
import style from "./MiniTabWithFix.module.css";
import ItemTabl from "../ItemTabl/ItemTabl.jsx";

const MiniTabWithFix = ({
  child,
  width,
  height,
  radius,
  border = null
}) => {
  return (
    <div
      className={style.block}
      style={{
        width: width,
        height: height,
        borderRadius: radius,
        border: border,
      }}
    >
      {child()}
    </div>
  );
};

export default MiniTabWithFix;
