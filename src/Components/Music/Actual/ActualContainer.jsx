import React from 'react';
import { connect } from 'react-redux';
import { Actual } from './Actual';

let mapStateToProps = (state) => {
   return {
      actual : state.musicPage.MusicActual
   }
}

export const ActualContainer = connect(mapDispatchToProps)(Actual);
