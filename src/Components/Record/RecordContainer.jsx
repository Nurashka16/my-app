import React from 'react'
import Record from './Record';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/auth-reducer';
import axios  from "axios";

class RecordContainer extends React.Component {
   componentDidMount() {
      axios.post(`http://127.0.0.1:5298/auth/register`, )
      .then(response => {
         debugger;
      })
      .catch(response => {

      })
   }
   render() {
      return <Record {...this.props} />
   }
}

let mapStateToProps = (state)=> {
   return {
      authPage: state.authPage,
   }
}


export default connect(mapStateToProps,{setUserData})(RecordContainer);