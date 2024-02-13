import React from "react";
import style from "./Title.module.css";
import { Icon28ServicesOutline, Icon28MoreHorizontal } from "@vkontakte/icons";
import ButtonBack from "../../Common/ButtonBack/ButtonBack";
import MiniTablWithoutFix from "../../Common/MiniTablWithoutFix/MiniTablWithoutFix";
import { ServiceTab } from "../../Tables/ServiceTab";
import { useClickOutside } from "../../Common/clickOutside";
import { useState } from "react";
import ProfileMoreTab from "../../Tables/ProfileMoreTab";

const ProfileTitle = () => {
  const { ref: menuRef, isShow, onShow } = useClickOutside();

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
      right: "42%",
      top: "63px",
      height: "217px",
      width: "216px",
      tab: <ServiceTab />,
    });
  };

  const onClickMore = () => {
    onShow();
    setData({ right: "25%", top: "63px",      height: "266px",
    width: "242px", tab: <ProfileMoreTab padding="2.9px 16px"/> });
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
          <div
            className={style.title_icon}
            ref={menuRef}
            onClick={() => onClickService()}
          >
            <Icon28ServicesOutline />
          </div>
          <div
            className={style.title_icon}
            style={{ fontSize: "20px" }}
            ref={menuRef}
            onClick={() => onClickMore()}
          >
            <Icon28MoreHorizontal />
          </div>
          <div>
            {isShow && (
              <MiniTablWithoutFix
                top={data.top}
                right={data.right}
                radius="12px"
                height={data.height}
                width={data.width}
                position="absolute"
                padding="0"
              >
                {data.tab}
              </MiniTablWithoutFix>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTitle;
