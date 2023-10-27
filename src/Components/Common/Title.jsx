import React from "react";
import emptyAvatar from"../../images/emptyAvatar.png";

const Title = ({url, width, height, borderRadius = 50}) => {
  return (
    <img
      src={!url ? emptyAvatar : url}
      width={width}
      height={height}
      style={{ borderRadius: `${borderRadius}%` }}
    />
  );
};

export default Title;
