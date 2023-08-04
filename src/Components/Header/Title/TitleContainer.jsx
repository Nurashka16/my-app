import React from 'react';
import Title from './Title';
import { connect } from "react-redux";
import { closeBlock, openBlock } from '../../../redux/header-reducer';


let mapStateToProps = (state) => {
   return {
      block: state.headerPage.block,
      elemsBurger: state.headerPage.elemsBurger,
    }
}
export const TitleContainer = connect(mapStateToProps, {
   closeBlock, openBlock
 })(Title);
 