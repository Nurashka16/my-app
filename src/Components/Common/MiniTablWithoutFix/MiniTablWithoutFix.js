import React from "react";
import style from "./MiniTablWithoutFix.module.css";
import ItemTabl from "../ItemTabl/ItemTabl.jsx";


const MiniTablWithoutFix = ({children, width, height, radius, border}) => {
  const tablList = children.map((el) => {
    return <ItemTabl text={el.text} iconLeft={el.icon} />;
  });

  return (
    <div
      className={style.block}
      /*style={{
        width={ width },
        height: { height },
        radius: { radius },
        border: { ...border },
      }}*/
    >{tablList}</div>
  );
};

export default MiniTablWithoutFix;
