import React from "react";
import style from "./Sing.module.css";

export const Sing = (props) => {
  let playingMusic = () => {
    props.playingMusic();
  }
  console.log(props);
  return (
    <div className={style.block}>
      <div>
        <img className={style.img} onClick={playingMusic} src={props.url}/>
      </div>
      <div className={style.title}>
        <div className={style.name}>
          {props.name}</div>
        <div className={style.author}>{props.author}</div>
      </div>
      <div className={style.length}>{props.length}</div>
    </div>
  );
};
