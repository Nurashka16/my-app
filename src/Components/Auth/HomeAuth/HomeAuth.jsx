import React from "react";
import style from "./HomeAuth.module.css";
import HomeAuthHeader from "./HomeAuthHeader/HomeAuthHeader";
import HomeAuthFooter from "./HomeAuthFooter/HomeAuthFooter";
import HomeAuthSignIn from "./HomeAuthMain/HomeAuthSignIn";
import HomeAuthSignUp from "./HomeAuthMain/HomeAuthSignUp";
import HomeAuthInstallApp from "./HomeAuthMain/HomeAuthInstallApp";

const HomeAuth = (props) => {
  return (
    <div className={style.body}>
      <header className={style.header}>
        <HomeAuthHeader />
      </header>
      <main className={style.main}>
        <HomeAuthInstallApp />
        <HomeAuthSignIn />
        <HomeAuthSignUp />
      </main>
      <footer className={style.footer}>
        <HomeAuthFooter />
      </footer>
    </div>
  );
};

export default HomeAuth;
