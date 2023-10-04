import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  addPostCreator,
  updateNewPostTextCreator,
  setProfile,
} from "../../redux/profile-reducer";
import { useEffect } from "react";
import ProfileTest from "./Profile";

export const ProfileContainerTest = (props) => {
  const userId = props.authPage.id;
  const {id} = useParams();
  /*useEffect(() => {
    setProfile(id);
  }, [id]);*/
  props.setProfile(id, [id]);
  return (
    <ProfileTest
      id={id}
      userId={userId}
      profilePage={props.profilePage}
      user={props.user}
      authPage={props.authPage}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    //profilePage: state.profilePage,
    user: state.profilePage.user,
    authPage: state.authPage,
  };
};

export default connect(mapStateToProps, {
  setProfile,
  addPostCreator,
  updateNewPostTextCreator,
})(ProfileContainerTest);
