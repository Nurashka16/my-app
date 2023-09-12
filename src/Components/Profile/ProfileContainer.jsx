import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import Profile from "./Profile";
import { setProfile } from "../../redux/profile-reducer";
import { useEffect } from 'react';



export const ProfileContainer = (props) => {
   const {id} = useParams();
   useEffect(() => {
    setProfile(id)
   }, [id])

   return (
      <Profile profilePage={props.profilePage} 
      user={props.user} />
    );
};

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    user: state.profilePage.user
  };
};


export default connect(mapStateToProps, { setProfile })(ProfileContainer);
