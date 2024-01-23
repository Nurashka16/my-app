import React from "react";
import emptyAvatar from "../../../images/emptyAvatar.png";

const Avatar = ({ url, width, height, borderRadius = 50, outline = "" }) => {
  return (
    <img
      width={width + "1px"}
      height={height + "1px"}
      src={!url ? emptyAvatar : url}
      style={{
        borderRadius: `${borderRadius}%`,
        outline,
        /*display:"block"*/
      }}
    />
  );
};

export default Avatar;
