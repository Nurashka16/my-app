import React from "react";
import style from "./ProfileInfo.module.css";
import Avatar from "../../Common/Avatar";
import { Icon16WorkOutline } from "@vkontakte/icons";
import { Icon16InfoOutline } from "@vkontakte/icons";
import { Icon16PlaceOutline } from "@vkontakte/icons";
import { Icon24AddCircleOutline } from "@vkontakte/icons";
import { useState } from "react";
import BurgerPost from "../../BurgerPost/BurgerPost";

const ProfileInfo = (props) => {
  const [post, setPost] = useState({
    isActive: false,
  });
  const toggleStatus = (value) => {
    setPost({ isActive: value });
  };
  return (
    <div className={style.info}>
      <div className={style.info_cover}>
        <div className={style.info_avatar}>
          <Avatar
            style={{ borderColor: "black" }}
            width="101px"
            height="99px"
            url="https://klike.net/uploads/posts/2022-08/1661856423_j-26.jpg"
          />
        </div>
      </div>
      <div className={style.info_content}>
        <div className={style.info_personInfo}>
          <div className={style.info_name}>
            Нурайым Молчанова (Тилепова)
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
        {post.isActive ? <BurgerPost toggleStatus={toggleStatus} /> : ""}
        <div className={style.info_btn} onClick={() => toggleStatus(true)}>
          <div className={style.info_icon__add}>
            <Icon24AddCircleOutline />
          </div>
          Опубликовать
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
