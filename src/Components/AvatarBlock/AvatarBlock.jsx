import React, { useState } from "react";
import style from "../Profile/ProfileInfo/ProfileInfo.module.css";
import Avatar from "../Common/Avatar/Avatar";
import { useRef, useEffect } from "react";
import {
  Icon20UserCircleOutline,
  Icon20WriteOutline,
  Icon20DeleteOutline,
} from "@vkontakte/icons";
import MiniTablWithoutFix from "../Common/MiniTablWithoutFix/MiniTablWithoutFix";
import { clickOutside } from "../Common/clickOutside";
//не хватает логики, что если нет фото, то количество
// кнопок меньше. А если это не мой профиль,то всего 1
const AvatarBlock = () => {
  const profileTabl = [
    { id: 1, text: "Открыть фото", icon: <Icon20UserCircleOutline /> },
    { id: 2, text: "Изменить фото", icon: <Icon20WriteOutline /> },
    { id: 3, text: "Удалить фото", icon: <Icon20DeleteOutline /> },
  ];
  const menuRef = useRef();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    clickOutside(setIsShow, menuRef);
  });
  return (
    <div
      className={style.info_avatar}
      ref={menuRef}
      onClick={() => setIsShow(!isShow)}
    >
      <Avatar
        style={{ borderColor: "black" }}
        width="101px"
        height="99px"
        url="https://klike.net/uploads/posts/2022-08/1661856423_j-26.jpg"
      />
      <div>
        {isShow && (
          <MiniTablWithoutFix
            radius="8%"
            border="1px solid black"
            height="132px"
            width="174px"
            children={profileTabl}
          />
        )}
      </div>
    </div>
  );
};

export default AvatarBlock;
