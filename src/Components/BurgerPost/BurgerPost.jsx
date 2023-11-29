import React from "react";
import { Icon28WriteSquareOutline } from "@vkontakte/icons";
import { Icon24PictureOutline } from "@vkontakte/icons";
import { Icon28LogoClipsOutline } from "@vkontakte/icons";
import { Icon20Cancel } from "@vkontakte/icons";
import style from "./BurgerPost.module.css";
import { Link } from "react-router-dom";

const BurgerPost = (props) => {
  return (
    <div className={style.menu}>
      <div className={style.burger}>
        <div className={style.burger_content}>
          <div className={style.burger_title}>Публикация</div>
          <div className={style.burger_list}>
            <Link className={style.burger_item} to={"/createPost"}>
              <div className={style.burger_icon}>
                <Icon28WriteSquareOutline />
              </div>
              <div className={style.burger_text}>Запись</div>
            </Link>
            <div className={style.burger_item}>
              <div className={style.burger_icon}>
                <Icon24PictureOutline width={28} height={28} />
              </div>
              <div className={style.burger_text}>Фото</div>
            </div>
            <div className={style.burger_item}>
              <div className={style.burger_icon}>
                <Icon28LogoClipsOutline />
              </div>
              <div className={style.burger_text}>Клип</div>
            </div>
          </div>
        </div>
        <div
          className={style.burger_btn__close}
          onClick={() => props.toggleStatus(false)}
        >
          <Icon20Cancel />
        </div>
      </div>
    </div>
  );
};

export default BurgerPost;
