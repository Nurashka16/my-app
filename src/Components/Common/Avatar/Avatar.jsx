import React from "react";
import emptyAvatar from "../../../images/emptyAvatar.png";

const Avatar = ({
  url = "https://i.pinimg.com/564x/2c/14/6c/2c146ccf4ce93190d27417963cb6ba15.jpg",
  width,
  height,
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
