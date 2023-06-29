import React from "react";
import { connect } from "react-redux";
import { Musics } from "./Musics";
import { playAC } from "../../redux/music-reducer";


export const LowMusicsContainer = (props) => {
  //для запросов и хуков
  return (
    <Musics playAC={props.playAC} musicPage={props.musicPage}/>
  )
}


let mapStateToProps = (state) => {
  return { musicPage: state.musicPage };
};



export const HighMusicsContainer = connect(mapStateToProps, {playAC})
(LowMusicsContainer);

