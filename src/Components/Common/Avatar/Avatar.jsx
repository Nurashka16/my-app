import React from "react";
import emptyAvatar from "../../../images/emptyAvatar.png";

const Avatar = ({
  url = "https://klike.net/uploads/posts/2022-08/1661856423_j-26.jpg",
  width,
  height ,
  borderRadius = 50,
  outline = "",
}) => {
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
