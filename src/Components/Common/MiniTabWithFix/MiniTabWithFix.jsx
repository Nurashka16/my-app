import React from "react";
import style from "./MiniTabWithFix.module.css";
import ItemTabl from "../ItemTabl/ItemTabl.jsx";

const MiniTabWithFix = ({arr}) => {
  const tabList = arr.map((el) => {
    return (
      <ItemTabl
        text={el.text}
        iconLeft={el.iconLeft}
        iconRight={el.iconRight}
      />
    );
  });

  console.log(arr);
  return (
    <div
      className={style.block}
      /*style={{
        width={ width },
        height: { height },
        radius: { radius },
        border: { ...border },
      }}*/
    >
      {tabList}
    </div>
  );
};

export default MiniTabWithFix;
