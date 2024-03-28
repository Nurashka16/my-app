import React from "react";
import style from "./Promo.module.css";
import {
  Icon20LogoVk,
  Icon28UserOutline,
  Icon28DoorArrowLeftOutline,
  Icon28LockOutline,
} from "@vkontakte/icons";

const Promo = (props) => {
  return (
    <div className={style.body}>
      <header className={style.header}>
        <div className={style.logotype}>
          <div className={style.logotype__img}>
            <Icon20LogoVk />
          </div>
          <span className={style.logotype__title}>ID</span>
        </div>
        <h2 className={style.header__desc}>
          ВКонтакте можно войти <br /> через VK ID
        </h2>
      </header>
      <main className={style.main}>
        <ul className={style.list}>
          <li className={style.list__item}>
            <div className={style.list__icon}>
              <Icon28UserOutline />
            </div>
            <div className={style.list__text}>
              Единый аккаунт для сервисов VK <br /> и партнёров
            </div>
          </li>
          <li className={style.list__item}>
            <div className={style.list__icon}>
              <Icon28DoorArrowLeftOutline />
            </div>
            <div className={style.list__text}>Быстрый вход в одно нажатие</div>
          </li>
          <li className={style.list__item}>
            <div className={style.list__icon}>
              <Icon28LockOutline />
            </div>
            <div className={style.list__text}>
              Надёжная защита с привязкой
              <br /> к телефону
            </div>
          </li>
        </ul>
      </main>
      <footer className={style.footer}>
        <button className={style.button}>Подробнее о VK ID</button>
      </footer>
    </div>
  );
};

export default Promo;
