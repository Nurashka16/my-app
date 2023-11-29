import React from "react";
import style from "./Avatar.module.css";
import emptyAvatar from "../../images/emptyAvatar.png";

const Avatar = ({ url, width, height, borderRadius = 50, outline = "" }) => {
  return (
    <img className={style.avatar}     width={width+"1px"}
    height={height+"1px"}
      src={!url ? emptyAvatar : url}
      style={{ borderRadius: `${borderRadius}%`,outline
      /*display:"block"*/ }}
    />
  );
};

export default Avatar;
