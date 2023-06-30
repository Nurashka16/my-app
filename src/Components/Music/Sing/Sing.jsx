import React from "react";
import style from "./Sing.module.css";

export const Sing = (props) => {
  return (
    <div className={style.block} onClick={(e)=> {
      props.playAC(props);
    }}>
      <div>
        <img className={style.img} src={props.data.url}/>
      </div>
      <div className={style.title}>
        <div className={style.name}>
          {props.data.name}</div>
        <div className={style.author}>{props.data.author}</div>
      </div>
      <div className={style.length}>{props.data.length}</div>
    </div>
  );
};
