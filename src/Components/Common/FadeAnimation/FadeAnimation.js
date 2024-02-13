import React, { useState } from "react";
import style from "./FadeAnimation.module.css";

const FadeAnimation = ({isShow, children}) => {
  return (
    isShow && <div className={style.wrap}>{children}</div>
  )
}

export default FadeAnimation