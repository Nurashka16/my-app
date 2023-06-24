import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUser } from "../../redux/profile-reducer";
import axios from "axios";
import { useEffect } from 'react';



export const ProfileContainer2 = (props) => {
   const {id} = useParams();
   console.log(props);
   useEffect(() => {
      axios
      .get(
        `http://127.0.0.1:5298/Users/Get/${id}`
      )
      .then((response) => {
        setUser(response.data.data);
      });
   }, [])

   return (
      <Profile profilePage={props.profilePage} 
      user={props.user} />
    );
}

const mapStateToProps = (state) => {
   return {
     profilePage: state.profilePage,
     user: state.profilePage.user
   };
 };

export default connect(mapStateToProps, { setUser })(
   ProfileContainer2
 );