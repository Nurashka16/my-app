import React from "react";
import style from "./Promo.module.css";

const Promo = (props) => {
  return (
    <div className={style.body}>
      <header className={style.header}>
        <div className={style.logotype}>
          <div className={style.logotype__img}>
            <svg
              width="20"
              height="20"
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
              <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h28v28H0z"></path>
                  <path
                    d="M17.5 8.5C17.5 6.566 15.934 5 14 5a3.499 3.499 0 00-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5zm2 0c0 3.039-2.461 5.5-5.5 5.5a5.499 5.499 0 01-5.5-5.5C8.5 5.461 10.961 3 14 3s5.5 2.461 5.5 5.5zM7 20.643c0 .943-.08.857.456.857h13.588c.536 0 .456.086.456-.857 0-2.288-3.304-3.643-7.25-3.643S7 18.355 7 20.643zm-2 0C5 16.763 9.299 15 14.25 15s9.25 1.763 9.25 5.643c0 2.016-.781 2.857-2.456 2.857H7.456C5.78 23.5 5 22.66 5 20.643z"
                    fill="#99a2ad"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
            </div>
            <div className={style.list__text}>
              Единый аккаунт для сервисов VK <br /> и партнёров
            </div>
          </li>
          <li className={style.list__item}>
            <div className={style.list__icon}>
              <svg
                fill="none"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M17.643 25H15a1 1 0 110-2h2.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 001.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-7.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 00-1.311-1.311c-.263-.134-.611-.226-1.216-.276C19.529 5.001 18.736 5 17.6 5H15a1 1 0 110-2h2.643c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 012.185 2.185c.302.592.428 1.233.487 1.961C25 8.4 25 9.273 25 10.357v7.286c0 1.084 0 1.958-.058 2.666-.06.728-.185 1.369-.487 1.961a5 5 0 01-2.185 2.185c-.592.302-1.232.428-1.961.487C19.6 25 18.727 25 17.643 25zM3 14a1 1 0 011-1h9.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a.996.996 0 01.294.705v.005c-.002.272-.11.518-.287.698l-.008.007-3.999 4a1 1 0 01-1.414-1.415L13.586 15H4a1 1 0 01-1-1z"
                  fill="#99a2ad"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </div>
            <div className={style.list__text}>Быстрый вход в одно нажатие</div>
          </li>
          <li className={style.list__item}>
            <div className={style.list__icon}>
              <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h28v28H0z"></path>
                  <path
                    d="M14 2a6 6 0 016 6l.002 2.023c.843.052 1.38.2 1.935.496.663.355 1.19.881 1.544 1.544.385.72.519 1.413.519 2.783v6.308c0 1.37-.134 2.063-.519 2.783a3.726 3.726 0 01-1.544 1.544c-.72.385-1.413.519-2.783.519H8.846c-1.37 0-2.063-.134-2.783-.519a3.726 3.726 0 01-1.544-1.544C4.134 23.217 4 22.524 4 21.154v-6.308c0-1.37.134-2.063.519-2.783a3.726 3.726 0 011.544-1.544c.555-.297 1.093-.444 1.936-.496L8 8a6 6 0 016-6zm5.154 10H8.846c-1.068 0-1.449.073-1.84.283-.314.168-.555.409-.723.723-.21.391-.283.772-.283 1.84v6.308c0 1.068.073 1.449.283 1.84.168.314.409.555.723.723.391.21.772.283 1.84.283h10.308c1.068 0 1.449-.073 1.84-.283.314-.168.555-.409.723-.723.21-.391.283-.772.283-1.84v-6.308c0-1.068-.073-1.449-.283-1.84a1.726 1.726 0 00-.723-.723c-.391-.21-.772-.283-1.84-.283zM14 15a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0-11a4 4 0 00-4 4v2h8V8a4 4 0 00-4-4z"
                    fill="#99a2ad"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
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
