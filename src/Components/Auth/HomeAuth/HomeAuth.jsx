import React from "react";
import style from "./HomeAuth.module.css";
import HomeAuthHeader from "./HomeAuthHeader";
import HomeAuthFooter from "./HomeAuthFooter";
import HomeAuthSignIn from "./HomeAuthSignIn";
import HomeAuthSignUp from "./HomeAuthSignUp";
import HomeAuthInstallApp from "./HomeAuthInstallApp";

const HomeAuthCopy = (props) => {
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

export default HomeAuthCopy;
