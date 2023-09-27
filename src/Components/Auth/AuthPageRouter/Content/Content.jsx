import React from "react";
import style from "./Content.module.css";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const Content = (props) => {
  const auth = 0;
  return (
    <div className={style.body}>
      <header className={style.header}>
        <div className={style.logotype}>
          <div className={style.logotype__img}>
            <svg
              width="48"
              height="48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M0 9.6c0-4.5 0-6.8 1.4-8.2C2.8 0 5.1 0 9.6 0h.8c4.5 0 6.8 0 8.2 1.4C20 2.8 20 5.1 20 9.6v.8c0 4.5 0 6.8-1.4 8.2-1.4 1.4-3.7 1.4-8.2 1.4h-.8c-4.5 0-6.8 0-8.2-1.4C0 17.2 0 14.9 0 10.4v-.8Z"
                fill="#07F"
              ></path>
              <path
                d="M10.7 14.3c-4.5 0-7.2-3.1-7.3-8.3h2.3c0 3.8 1.8 5.4 3.1 5.8V6H11v3.3c1.3-.1 2.6-1.6 3-3.3h2.2c-.3 2-1.8 3.5-2.8 4.2 1 .5 2.7 1.8 3.3 4.1h-2.3c-.5-1.6-1.8-2.8-3.4-3v3h-.3Z"
                fill="#fff"
              ></path>
            </svg>
          </div>
          <div className={style.logotype__title}>Вход ВКонтакте</div>
        </div>
        {auth ? (
          <div className={style.info}>
            Введите телефон или почту, которые
            <br className={style.info__span} />
            привязаны к аккаунту
          </div>
        ) : (
          <div className={style.info}>
            Ваш номер телефона будет использоваться
            <br className={style.info__span} />
            для входа в аккаунт
          </div>
        )}
      </header>
      <main className={style.main}>
        {auth ? <SignIn /> : <SignUp />}
      </main>
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
