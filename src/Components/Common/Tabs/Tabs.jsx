import React from "react";
import style from "./Tabs.module.css";
import Tab from "./Tab.jsx";
import {
  Icon20GearOutline,
  Icon16ChevronLeft,
  Icon20ChevronRight,
} from "@vkontakte/icons";
import IconButton from "../IconButton/IconButton.jsx";
import { useState } from "react";
/*по желанию можно добавить анимацию при focus*/

const Tabs = ({ children, list }) => {
  const [isActiveIcon, setActiveIcon] = useState(false);
  const [isFocusIcon, setFocusIcon] = useState(false);
  const [isScroll, setScroll] = useState(false);
  const buttons = list.map((button) => {
    return (
      <Tab
        id={button.id}
        iconLeft={button.iconLeft}
        iconRight={button.iconRight}
      >
        {button.name}
      </Tab>
    );
  });
  return (
    <div className={style.tabs}>
      <div
        className={style.tabs_container}
        style={{
          margin: isFocusIcon ? "0 6px 0 6px" : "0 6px 0 10px",
          justifyContent: isScroll ? "flex-end" : "flex-start",
        }}
        onMouseLeave={(e) => setActiveIcon(false)}
        onMouseEnter={(e) => setActiveIcon(true)}
      >
        <div className={style.tabs_content}> {buttons}</div>
        {/* {isActiveIcon && (
          <div
            style={{ left: isFocusIcon && "493.5px" }}
            onMouseLeave={(e) => setFocusIcon(false)}
            onMouseEnter={(e) => setFocusIcon(true)}
            className={style.tabs_scroll}
            onClick={(e) => setScroll(!isScroll)}
          >
            <IconButton>
              <Icon16ChevronLeft />
            </IconButton>
          </div>
        )} */}
        {isActiveIcon && (
          <div
            style={{ left: isFocusIcon && "493.5px" }}
            onMouseLeave={(e) => setFocusIcon(false)}
            onMouseEnter={(e) => setFocusIcon(true)}
            className={style.tabs_scroll}
            onClick={(e) => setScroll(!isScroll)}
          >
            <IconButton>
              <Icon20ChevronRight width="16px" height="16px" />
            </IconButton>
          </div>
        )}
      </div>

      {/* <div style={{ borderLeft: "2.5px solid #ebeced", height: "20px" }}> */}
      <div className={style.setting}>
        <Icon20GearOutline />
      </div>
    </div>
  );
};

export default Tabs;
