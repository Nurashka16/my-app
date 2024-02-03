import React from "react";
import style from "./ProfileInfo.module.css";
import AvatarBlock from "../../AvatarBlock/AvatarBlock.jsx";
import { Icon16WorkOutline } from "@vkontakte/icons";
import { Icon16InfoOutline, Icon28MoreHorizontal } from "@vkontakte/icons";
import { Icon16PlaceOutline, Icon28UserAddedOutline } from "@vkontakte/icons";
import Popup from "../../Common/Popup.jsx";
import Avatar from "../../Common/Avatar/Avatar.jsx";
import MiniTablWithoutFix from "../../Common/MiniTablWithoutFix/MiniTablWithoutFix.js";
import { AvatarTab } from "../../Tables/AvatarTab.jsx";

const ProfileInfo = ({ name, avatar, id, children }) => {
  return (
    <div className={style.info} id={id}>
      {/* /*<AvatarBlock/>*/}
      <Popup
        burger={
          <MiniTablWithoutFix
            right="-30%"
            top="104%"
            position="absolute"
            radius="8px"
            height="132px"
            width="174px"
            padding="0"
          >
            <AvatarTab />
          </MiniTablWithoutFix>
        }
      >
        <Avatar style={{ borderColor: "black" }} width="101px" height="99px" />
      </Popup>
      <div className={style.info_content}>
        <div className={style.info_personInfo}>
          <div className={style.info_name}>
            {name}
            <img
              className={style.info_imageStatus}
              src="https://sun1-26.userapi.com/y6fKQg5F2zegc6mn5iwKSaZpzWmYo5dYXUcjAQ/Qy9fDkA1E7A.png"
              alt="Ня-демон"
              width="20"
              height="20"
            ></img>
          </div>
          <div className={style.info_status}>Я в порядке, но в обратном</div>
          <div className={style.info_addInfo}>
            <div className={style.info_geo}>
              <div className={style.info_icon__geo}>
                <Icon16PlaceOutline />
              </div>
              <div className={style.info_city}>Москва</div>
            </div>
            <div className={style.info_job}>
              <div className={style.info_icon__job}>
                <Icon16WorkOutline />
              </div>
              <div className={style.info_placeJob}>BTS</div>
            </div>
            <div className={style.info_icon__more}>
              <Icon16InfoOutline />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ProfileInfo;
