import React from "react";
import { connect } from "react-redux";
import { Musics } from "./Musics";
import { playAC } from "../../redux/musicSlice";

const LowMusicsContainer = (props) => {
  //для запросов и хуков
  return <Musics playAC={props.playAC} musicPage={props.musicPage} />;
};

let mapStateToProps = (state) => {
  return { musicPage: state.musicPage };
};

export default connect(mapStateToProps, { playAC })(LowMusicsContainer);
