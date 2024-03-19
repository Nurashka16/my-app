import React, { Children, cloneElement } from "react";
import style from "./Tabs.module.css";
import { Icon16ChevronLeft, Icon20ChevronRight } from "@vkontakte/icons";
import IconButton from "../IconButton/IconButton.jsx";
import { useState } from "react";
import { useRef } from "react";
import useOnClickScroll from "../useOnClickScroll.ts";

const ScrollIcon = ({ children, onClick, isOpacity, setIsFocusIcon }) => (
  <div
    onMouseEnter={(e) => setIsFocusIcon(true)}
    onMouseLeave={(e) => setIsFocusIcon(false)}
    style={{ opacity: isOpacity ? 1 : 0 }}
    onClick={(e) => onClick()}
    className={style.icon_scroll}
  >
    <IconButton> {children}</IconButton>
  </div>
);

const Tabs = ({ children, value, onChange }) => {
  const ref = useRef();
  const [isOpacity, setIsOpacity] = useState(false);
  const [isFocusIcon, setIsFocusIcon] = useState(false);
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
          <ScrollIcon
            onClick={scrollToStart}
            isOpacity={isOpacity}
            setIsFocusIcon={setIsFocusIcon}
          >
            <Icon16ChevronLeft />
          </ScrollIcon>
        )}
        <div ref={ref} className={style.content}>
          {Children.map(children, (tab, i) =>
            cloneElement(tab, {
              key: { i },
              isActive: value === tab.props.value,
              onClick: onChange,
            })
          )}
        </div>
        {canScroll.end && (
          <ScrollIcon
            onClick={scrollToEnd}
            isOpacity={isOpacity}
            setIsFocusIcon={setIsFocusIcon}
          >
            <Icon20ChevronRight width="16px" height="16px" />
          </ScrollIcon>
        )}
      </div>
    </div>
  );
};

export default Tabs;
