import React from "react";
import { Sing } from "./Sing/Sing";
import { Actual } from "./Actual/Actual";
import style from "./Musics.module.css";

export const Musics = (props) => {
  let actual = props.musicPage.musicActual;
  let musics = props.musicPage.musics.map((m) => (
    <div>
      <Sing /*onclick={
        (e)=> {
        props.playAC(m);
      }}*/
        id={m.id}
        key={m.id}
        author={m.author}
        musicLength={m.musicLength}
        play={m.play}
        url={m.url}
        //playAc={props.playAc}
      />
    </div>
  ));
  return (
    <div>
      <div className={style.act}>{actual ? "no null" : musics[0] }</div>
      <div>{musics}</div>
    </div>
  );
};
/*   id: 3,
      url: "https://btsarmy.ru/_pu/0/43245221.jpg",
      musicName: "KroCi",
      author: "MsNash",
      musicLength: "4:01",
      play: false,
    <SingContainer
      id={m.id} key={m.id}
    />
  ));
  return (
    <div>
      <div>
        {actual == null ? null : <Actual/> }
      </div>
      <div>{musics}</div>
    </div>*/
