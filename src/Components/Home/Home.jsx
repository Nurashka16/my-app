import React from "react";
import Logotype from "../Header/Logotype/Logotype";
import style from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
      <div className={style.wrapper}>
        <header className={style.header}>
          <div className={style.content}>
            <div className={style.logotype}>
              <Logotype />
            </div>
          </div>
        </header>
        <main className={style.main}>
          <div className={style.content}>
            <div className={style.installApp}>
              <div className={style.install_img}>
                <img
                  className={style.install_img_phone}
                  src="https://st1-98.vk.com/images/icons/mobile_new.png"
                  alt=""
                />
              </div>
              <div className={style.install_text}>
                Установить приложение
                <span className={style.install_span}> ВКонтакте</span>
              </div>
              <div className={style.install_img}>
                <img
                  className={style.icon_arrow}
                  src="https://st1-98.vk.com/images/icons/blue_arrow.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.signIn}>
              <div className={style.sign_title}>Вход ВКонтакте</div>
              <div className={style.sign_text}>
                Мобильная версия поможет вам оставаться ВКонтакте, даже если вы
                далеко от компьютера.
              </div>
              <button className={style.sign_btn}>
                Войти по телефону или почте
              </button>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.register}>
              <NavLink to={"/record"}
                className={style.register_link}
              >
                Зарегистрироваться
              </NavLink>
            </div>
          </div>
        </main>
        <footer className={style.footer}>
          <div className={style.content}>
            <div className={style.menu}>
              <div className={style.menu_languages}>
                <div className={style.language_uk}>Українська</div>
                <div className={style.language_en}>English</div>
                <div className={style.menu_list}>all languages »</div>
              </div>
              <div className={style.content}>
                <div className={style.version}>Версия для компьютера</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default Home;
