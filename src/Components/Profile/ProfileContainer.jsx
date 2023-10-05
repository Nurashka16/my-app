import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  addPost,
  updateTextInput,
  setProfile,
} from "../../redux/profile-reducer";
import { useEffect } from "react";

export const ProfileContainer = (props) => {
  const userId = props.authPage.id;
  const {id} = useParams();
  useEffect(() => {
    props.setProfile(id);
  }, [id]);
  return (
    <Profile
      id={id}
      userId={userId}
      profilePage={props.profilePage}
      user={props.user}
      authPage={props.authPage}
      posts={props.posts}
      arr={props.arr}
      updateTextInput={
        props.updateTextInput
      }
      addPost={props.addPost}
      newPostText={props.newPostText}
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
    arr : state.profilePage.arr,
  };
};

export default connect(mapStateToProps, {
  setProfile,
  addPost,
  updateTextInput,
})(ProfileContainer);
