import React, { useState, useRef, useEffect } from "react";
import {
  Icon16Dropdown,
  Icon28NewsfeedOutline,
  Icon28CheckCircleOn,
  Icon28HistoryForwardOutline,
  Icon28CameraOutline,
  Icon28SettingsOutline,
} from "@vkontakte/icons";
import style from "./Title.module.css";
import Burger from "../../menuBurger/Burger";
import { clickOutside } from "../../Common/clickOutside";
import MiniTabWithFix from "../../Common/MiniTabWithFix/MiniTabWithFix";

const NewsTitle = () => {
  const tabsList = [
    {
      id: 1,
      text: "Новости",
      iconLeft: <Icon28NewsfeedOutline />,
      iconRight: <Icon28CheckCircleOn />,
    },
    {
      id: 2,
      text: "Обновления",
      iconLeft: <Icon28HistoryForwardOutline />,
    },
    {
      id: 3,
      text: "Фотографии",
      iconLeft: <Icon28CameraOutline />,
    },
    {
      id: 4,
      text: "Настроить новости",
      iconLeft: <Icon28SettingsOutline />,
    },
  ];
  const menuRef = useRef();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    clickOutside(setIsShow, menuRef);
  });
  return (
    <div className={style.title} ref={menuRef}>
      <div
        className={style.title_container}
        onClick={() => setIsShow(!isShow)}
        style={{
          paddingLeft: "9px",
        }}
      >
        <div className={style.title_content}>
          <div className={style.title_text}>Новости</div>
          <div className={style.title_icon__near}>
            <Icon16Dropdown />
          </div>
        </div>
      </div>
      <div>{isShow && <MiniTabWithFix arr={tabsList} />}</div>
    </div>
  );
};

export default NewsTitle;
