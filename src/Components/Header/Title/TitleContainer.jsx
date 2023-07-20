import React from 'react';
import Title from './Title';
import { connect } from "react-redux";


let mapStateToProps = (state) => {
   return {
      titlePage: state.titlePage,
    }
}
export const TitleContainer = connect(mapStateToProps, {
   closeBlock, openBlock
 })(Title);