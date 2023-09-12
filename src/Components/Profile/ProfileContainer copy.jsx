/*import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUser } from "../../redux/profile-reducer";
import axios from "axios";
import { useEffect } from "react";
import React from "react";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { id } = useParams();
    useEffect(() => {
      axios.get(`http://127.0.0.1:5298/Users/Get/${id}`).then((response) => {
        console.log(response);
        this.props.setUser(response.data);
      });
    }, [id]);
  }
  render() {
    return <Profile profilePage={this.props.profilePage} user={this.props.user} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    user: state.profilePage.user,
  };
};

export default connect(mapStateToProps, { setUser })(ProfileContainer);
/*
const mapStateToProps = (state) => {
   return {
     profilePage: state.profilePage,
     user: state.profilePage.user
   };
 };

export const LowProfileContainer = (props) => {
   console.log(props);
   const {id} = useParams();
   useEffect(() => {
      axios
      .get(
        `http://127.0.0.1:5298/Users/Get/${id}`
      )
      .then((response) => {
        console.log(response);
        props.setUser(response.data);
      });
   }, [id])

   return (
      <Profile profilePage={props.profilePage} 
      user={props.user} />
    );
};

export const HighProfileContainer = connect(mapStateToProps, { setUser })(LowProfileContainer);
*/
