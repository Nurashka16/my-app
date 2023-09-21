import React from "react";
import style from "./HomeAuth.module.css";


const HomeAuthFooter = (props) => {
  return (
    <footer className={style.container}>
      <nav className={style.nav}>
        <ul className={style.nav__languages}>
          <li className={style.nav__language}>Українська</li>
          <li className={style.nav__language}>English</li>
          <li className={style.menu__language_list}>all languages »</li>
        </ul>
        <div className={style.version}>
          <div className={style.version__btn}>Версия для компьютера</div>
        </div>
      </nav>
      
    </footer>
  );
};

export default HomeAuthFooter;
