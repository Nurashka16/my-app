import React from "react";
import style from "./Title.module.css";
import { Icon28ServicesOutline, Icon28MoreHorizontal } from "@vkontakte/icons";
import ButtonBack from "../../Common/ButtonBack/ButtonBack";
import WrapWithoutFix from "../../Common/WrapWithoutFix/WrapWithoutFix";
import { ServiceActions } from "../../ProfilePage/Interaction/ServiceActions";
import { useClickOutside } from "../../Common/clickOutside.ts";
import { useState } from "react";
import ProfileActions from "../../ProfilePage/Interaction/ProfileActions";
import { useRef } from "react";

//по нажатию на search идет запрос на друзей и списком показывает
const ProfileTitle = () => {
  const { ref: menuRef, isShow, onShow } = useClickOutside();
  const ref = useRef();
  const [data, setData] = useState({
    right: undefined,
    top: undefined,
    tab: undefined,
    height: undefined,
    width: undefined,
  });

  const onClickService = () => {
    onShow();
    setData({
      right: "35px",
      top: "35px",
      height: "217px",
      width: "216px",
      padding: "8px 0",
      tab: <ServiceActions />,
    });
  };

  const onClickMore = () => {
    onShow();
    setData({
      right: "-210px",
      top: "35px",
      height: "266px",
      width: "242px",
      tab: <ProfileActions padding="2.7px 16px" />,
    });
  };
  return (
    <div className={style.title}>
      <div
        className={style.title_container}
        style={{
          paddingTop: "16.5px",
          paddingLeft: "4.5px",
        }}
      >
        <div className={style.title_content}>
          <div className={style.title_icon__left}>
            <ButtonBack />
          </div>
          <div
            className={style.title_text}
            style={{
              fontWeight: "500",
              fontSize: "19.5px",
            }}
          >
            @maybeNik
          </div>
        </div>
        <div
          className={style.title_icon__right}
          style={{
            paddingBottom: "0.5px",
          }}
        >
          <div className={style.title_icon}>
            <Icon28ServicesOutline
              ref={menuRef}
              onClick={() => onClickService()}
            />
          </div>
          <div className={style.title_icon} style={{ fontSize: "20px" }}>
            <Icon28MoreHorizontal ref={menuRef} onClick={() => onClickMore()} />
          </div>
          <div className={style.title_wrap}>
            {isShow && (
              <WrapWithoutFix
                top={data.top}
                right={data.right}
                radius="12px"
                height={data.height}
                width={data.width}
                position="absolute"
                padding={data.padding}
              >
                {data.tab}
              </WrapWithoutFix>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTitle;
