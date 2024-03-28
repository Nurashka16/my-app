import React from "react";
import style from "./Content.module.css";
import { useAuthFactory } from "../../../../app/hooks/auth/useAuthFactory";
import { Icon48LogoVk } from "@vkontakte/icons";

const Content = () => {
  const authInfo = useAuthFactory();
  return (
    <div className={style.body}>
      <header className={style.header}>
        <div className={style.logotype}>
          <div className={style.logotype__img}>
            <Icon48LogoVk />
          </div>
          <div className={style.logotype__title}>Вход ВКонтакте</div>
        </div>
        {
          <div className={style.info}>
            {authInfo.description.item1}
            <br className={style.info__span} />
            {authInfo.description.item2}
          </div>
        }
      </header>
      <main className={style.main}>{authInfo.component}</main>
      <footer className={style.footer}>
        <p className={style.footer__desc}>
          Нажимая «Продолжить», вы принимаете&ensp;
          <span className={style.footer__span}>
            пользовательское <br /> соглашение
          </span>
          и&ensp;
          <span className={style.footer__span}>
            политику конфиденциальности
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Content;
