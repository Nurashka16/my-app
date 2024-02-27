import React from "react";
import ProfileInfo from "./ProfileInfo";
import { Icon24MoreHorizontal, Icon24UserAddedOutline } from "@vkontakte/icons";
import { Icon24MessageOutline, Icon24PhoneOutline } from "@vkontakte/icons";
import style from "./Profile.module.css";

const UserProfile = ({ avatar, id, name }) => {
  return (
    <>
      <ProfileInfo
        avatar={avatar}
        name={name}
        id={id}
        children={
          <div className={style.info_footer}>
            {/*переименовать переменные*/}
            <div className={style.info_btn_send} onClick={() => console.log(5)}>
              <div className={style.info_icon__send}>
                <Icon24MessageOutline />
              </div>
              Сообщение
            </div>
            <div className={style.info_additional}>
              <div className={style.info_btnContainer}>
                <div className={style.info_btn__icon}>
                  <Icon24PhoneOutline />
                </div>
              </div>
              <div className={style.info_btnContainer}>
                <div className={style.info_btn__icon}>
                  <Icon24UserAddedOutline />
                </div>
              </div>
              <div className={style.info_btnContainer}>
                <div className={style.info_btn__icon}>
                  <Icon24MoreHorizontal />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default UserProfile;
