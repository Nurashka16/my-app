import React from "react";
import style from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={style.profile}>
      <div className={style.frame}>
        {/*  рамка */}
        <img
          className={style.img}
          src={props.url}
          alt=""
        />
      </div>
      <div className={style.info}>
        <div className={style.title}>
          <h3 className={style.name}>{props.name}</h3>
          <div className={style.age}>({props.age} y.)</div>
        </div>
        <div className={style.block_connect}>
          <div className={style.write}>write</div>
          <div className={style.call}>call up</div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
