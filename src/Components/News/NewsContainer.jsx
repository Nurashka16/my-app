import React from 'react';
import News from './News';
import { connect } from 'react-redux';

export const NewsContainer = (props) => {
  return (
    <News userAvatar={props.userAvatar}/>
  )
}
const mapStateToProps = (state) => {
   return {
     userAvatar: state.authPage.avatar,
   };
 };

export default connect(mapStateToProps)(NewsContainer);