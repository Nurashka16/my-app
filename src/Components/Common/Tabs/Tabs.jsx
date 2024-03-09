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
import { useRef } from "react";
import useOnClickScroll from "../useOnClickScroll.js";

const Tabs = ({ children, list }) => {
  const ref = useRef();
  const [isOpacity, setIsOpacity] = useState(false);
  const [isFocusIcon, setIsFocusIcon] = useState(false);
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
  const { scrollToStart, scrollToEnd, canScroll } = useOnClickScroll(ref);

  return (
    <div className={style.tabs}>
      <div
        className={style.container}
        onMouseEnter={(e) => setIsOpacity(true)}
        onMouseLeave={(e) => setIsOpacity(false)}
        style={{
          padding: isFocusIcon && "0 0 0 5px",
        }}
      >
        {canScroll.start && (
          <div
            onMouseEnter={(e) => setIsFocusIcon(true)}
            onMouseLeave={(e) => setIsFocusIcon(false)}
            style={{ opacity: isOpacity ? 1 : 0 }}
            onClick={(e) => scrollToStart()}
            className={style.icon_scroll}
          >
            <IconButton>
              <Icon16ChevronLeft />
            </IconButton>
          </div>
        )}
        <div ref={ref} className={style.content}>
          {buttons}
        </div>
        {canScroll.end && (
          <div
            onMouseEnter={(e) => setIsFocusIcon(true)}
            onMouseLeave={(e) => setIsFocusIcon(false)}
            onClick={(e) => scrollToEnd()}
            style={{ opacity: isOpacity ? 1 : 0 }}
            className={style.icon_scroll}
          >
            <IconButton>
              <Icon20ChevronRight width="16px" height="16px" />
            </IconButton>
          </div>
        )}
      </div>

      <div className={style.setting}>
        <Icon20GearOutline />
      </div>
    </div>
  );
};

export default Tabs;
