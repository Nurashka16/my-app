import React from "react";
import { Sing } from "./Sing/Sing";
import { Actual } from "./Actual/Actual";
import style from "./Musics.module.css";

export const Musics = (props) => {
  let actual = props.musicPage.musicActual;
  let musics = props.musicPage.musics.map((m) => (
    <div>
      <Sing data={m}
        playAC={props.playAC}
      />
    </div>
  ));
  return (
    <div>
      <div className={style.act}>{actual ? <Sing data={actual.data}/> : musics[0] }</div>
      <div>{musics}</div>
    </div>
  );
};