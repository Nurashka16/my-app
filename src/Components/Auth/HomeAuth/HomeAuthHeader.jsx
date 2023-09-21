import React from "react";
import Logotype from "../../Logotype/Logotype";
import style from "./HomeAuth.module.css";

const HomeAuthHeader = (props) => {
  return (
    <div className={style.container}>
      <Logotype />
    </div>
  );
};

export default HomeAuthHeader;