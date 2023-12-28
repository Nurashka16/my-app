import React, { useState } from "react";
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
import useOutsideAlerted from "../../Common/useOutsideAlerted";

const NewsTitle = () => {
  const { ref, isShow, setIsShow } = useOutsideAlerted(false);
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
  return (
    <div className={style.title}>
      <div
        className={style.title_container}
        onClick={() => setIsShow(prev => !prev)}
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
      <div ref={ref}>{isShow && <Burger arr={tabsList} />}</div>
    </div>
  );
};

export default NewsTitle;
