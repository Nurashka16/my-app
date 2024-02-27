import React from "react";
import style from "./ProfileInfo.module.css";
import { Icon16WorkOutline } from "@vkontakte/icons";
import { Icon16InfoOutline } from "@vkontakte/icons";
import { Icon16PlaceOutline } from "@vkontakte/icons";
import Popup from "../../Common/Popup.jsx";
import Avatar from "../../Common/Avatar/Avatar.jsx";
import WrapWithoutFix from "../../Common/WrapWithoutFix/WrapWithoutFix.js";
import { AvatarActions } from "../Interaction/AvatarActions.jsx";
import { useState } from "react";
import WrapWithButton from "../../Common/WrapWithButton/WrapWithButton.js";
import DetailedAccountInfo from "../Interaction/DetailedAccountInfo.jsx";
import { useSelector } from "react-redux";

const ProfileInfo = ({ name, avatar, id, children }) => {
  const info = useSelector((state) => state.profilePage.userInfoDetails);
  // const ref = useRef(undefined);
  // console.log(ref.current?.offsetParent);
  const [isShowInfo, setShowInfo] = useState(false);
  return (
    <div className={style.info} id={id}>
      <Popup
        burger={
          <WrapWithoutFix
            right="-30%"
            top="104%"
            position="absolute"
            radius="8px"
            height="132px"
            width="174px"
            padding="0"
          >
            <AvatarActions />
          </WrapWithoutFix>
        }
      >
        <Avatar style={{ borderColor: "black" }} width="101px" height="99px" />
      </Popup>
      <div className={style.info_content}>
        {isShowInfo && (
          <WrapWithButton
            isShow={isShowInfo}
            setShow={setShowInfo}
            padding="0"
            left="33.5%"
          >
            <DetailedAccountInfo
              info={info}
              width="430px"
              height="100%"
              radius="12px"
            />
          </WrapWithButton>
        )}
        <div
          className={style.info_personInfo}
          onClick={(e) => setShowInfo(!isShowInfo)}
        >
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
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
