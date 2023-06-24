import React from "react";
import { Sing } from "./Sing/Sing";
import { Actual } from "./Actual/Actual";
import { SingContainer } from "./Sing/SingContainer";

export const Musics = (props) => {
  let actual = props.musicPage.musicActual;
  let musics = props.musicPage.musics.map((m) => (
    <SingContainer
      id={m.id}
    />
  ));
  return (
    <div>
      <div>
        {actual == null ? null : <Actual/> }
      </div>
      <div>{musics}</div>
    </div>
  );
};
