import { connect } from "react-redux";
import Profile from "./Profile";
import { setUser } from "../../redux/profile-reducer";
import axios from "axios";
import React from "react";

export class ProfileContainer extends React.Component {
  componentDidMount() {
    /*this.props.setIsFetching(true);*/
    axios
      .get(
        `http://127.0.0.1:5298/Users/Get?page=19
          &pageSize=1`
      )
      .then((response) => {
        console.log(response.data.data);
        this.props.setUser(response.data.data);
      });
  }
  render() {
    return (
      <Profile profilePage={this.props.profilePage} user={this.props.user} />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    user: state.profilePage.user,
  };
};
export default connect(mapStateToProps, { setUser })(ProfileContainer);
