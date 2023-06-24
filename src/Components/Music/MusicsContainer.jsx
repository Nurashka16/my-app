import React from "react";
import { connect } from "react-redux";
import { playAC } from "../../redux/music-reducer";
import { Musics } from "./Musics";

let mapStateToProps = (state) => {
  return { musicPage: state.musicPage };
};

let mapDispatchToProps = (dispatch) => {
  return {
    play: (musicId) => {
      dispatch(playAC(musicId));
    },
  };
};
export const MusicsContainer = connect(mapStateToProps, mapDispatchToProps)
(Musics);

