import { connect } from "react-redux";
import Profile from "./Profile";
import { setUser, toggleIsFetching, clearState } from "../../redux/profile-reducer";
import axios from "axios";
import { useParams} from 'react-router-dom';
import React from "react";
/*
function withRouter(child) {
  return(props)=> {
    const match  = {params: useParams()};
    return <Children {...props}  match = {match}/>
  }
}*/
export class ProfileContainer extends React.Component {
  /*redirectToMainUser() {
    let userId = this.props.match.params.userId;
    // let userId = this.props.router.params.userId;
    if(!userId) {
        userId = 20; //Пишем Ваш id
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
}
*/
  componentDidMount() {
    // this.props.toggleIsFetching(true);
    axios
      .get(
        `http://127.0.0.1:5298/Users/Get?page=19
          &pageSize=1`
      )
      .then((response) => {
        // this.props.toggleIsFetching(false);
        this.props.setUser(response.data.data);
      });
  }
/*
  componentWillUnmount() {
    this.props.clearState();
  }*/
  render() {
    return (
      <Profile profilePage={this.props.profilePage} 
      user={this.props.user} />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    user: state.profilePage.user,
    isFetching: state.profilePage.isFetching,
  };
};
export default connect(mapStateToProps, { setUser,clearState, toggleIsFetching })(
  ProfileContainer
);
