import React from 'react'
import { connect } from 'react-redux';
import { playAC } from '../../../redux/music-reducer';
import { Sing } from './Sing';

let mapStateToProps = (state) => {
 return {
  state: state
  /*
   let sing: state.musicPage.musics.map((s.id==state.id) => {
     /* ... */
 }
}

let mapDispatchToProps = (dispatch) => {
  return {
    playingMusic: () => ( 
      dispatch(playAC())
    ),
  }
}
/*    addPost: () => (
      dispatch(addPostCreator())
    ),
*/
export const SingContainer = (props) => {
  return (
   connect(mapStateToProps(props.id), mapDispatchToProps)(Sing)
  )
}
/*
export const SingContainer = connect(mapStateToProps, 
   mapDispatchToProps)(Sing);
   console.log(SingContainer.props);
*/