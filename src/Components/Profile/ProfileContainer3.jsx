import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUser } from "../../redux/profile-reducer";
import axios from "axios";
import { useEffect } from 'react';
import React from "react";

const ProfileCont3 = (props) => {
  console.log(props.setUser);
  return (
    <>
    123
    {props.profilePage.newPostText}
    </>
  )
}

/*

export const ProfileContainer2 = (props) => {
   console.log(props);
   const {id} = useParams();
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
*/
let mapStateToProps = (state) => {
   return {
     profilePage: state.profilePage,
     user: state.profilePage.user,
   };
  };

  export const MyProfileCont = connect(mapStateToProps, { setUser })(ProfileCont3);