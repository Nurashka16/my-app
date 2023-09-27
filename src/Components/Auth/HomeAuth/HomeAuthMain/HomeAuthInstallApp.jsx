import React from "react";
import style from "../HomeAuth.module.css";

const HomeAuthInstallApp = (props) => {
  return (
    <aside className={style.container}>
      <div className={style.installApp}>
        <div className={style.installApp__img}>
          <img
            className={style.installApp__img_phone}
            src="https://st1-98.vk.com/images/icons/mobile_new.png"
            alt=""
          />
        </div>
        <div className={style.installApp__link}>
          <h3 className={style.installApp__text}>
            Установить приложение
            <span className={style.installApp__span}> ВКонтакте</span>
          </h3>
          <div className={style.installApp__img}>
            <img
              className={style.installApp__img_arrow}
              src="https://st1-98.vk.com/images/icons/blue_arrow.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default HomeAuthInstallApp;
