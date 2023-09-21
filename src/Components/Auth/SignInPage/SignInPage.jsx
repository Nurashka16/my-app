import React from "react";
import style from "./SignInPage.module.css";
import SignInPagePromo from "./SignInPagePromo";
import SignInPageContent from "./SignInPageContent";

const SignInPage = (props) => {
  return (
    <div className={style.body}>
      <div className={style.signIn}>
        <SignInPagePromo/>
        <SignInPageContent/>
      </div>
    </div>
  );
};

export default SignInPage;
