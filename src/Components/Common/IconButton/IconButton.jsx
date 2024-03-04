import React from "react";
import { Icon20ChevronRight } from "@vkontakte/icons";
import style from "./IconButton.module.css";
import { useState } from "react";

const IconButton = ({
  children,
}) => {
  // const [isActiveIcon, setActiveIcon] = useState(false);
  // const i = (e) => {
  //   console.log(e.target.current.offsetParent());
  // };
  return (
    <div
      // onMouseLeave={(e) => console.log(e)}
      // onMouseEnter={(e) => console.log(e)}
      className={style.icon}
    >
      {children}
    </div>
  );
};

export default IconButton;
