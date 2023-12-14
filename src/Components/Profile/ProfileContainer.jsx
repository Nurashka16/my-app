import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  addPost,
  updateTextInput,
  setProfile,
} from "../../redux/profile-reducer";
import { useEffect } from "react";
import Preloader from "../Preloader/preloader";

export const ProfileContainer = (props) => {
  const { id } = useParams();
  useEffect(() => {
    props.setProfile(id);
  }, [id]);
  return (
    <>
      <Preloader isFetching={props.isFetching} />
      <Profile
        urlId={id}
        profilePage={props.profilePage}
        user={props.user}
        posts={props.posts}
        updateTextInput={props.updateTextInput}
        addPost={props.addPost}
        newPostText={props.newPostText}
        ownerId={props.ownerId}
        ownerFullName={props.ownerFullName}
        ownerAvatar={props.ownerAvatar}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    user: state.profilePage.user,
    isFetching: state.profilePage.isFetching,
    ownerId: state.authPage.id,
    ownerFullName: state.authPage.firstName + " " + state.authPage.lastName,
    ownerAvatar: state.authPage.avatar,
  };
};

export default connect(mapStateToProps, {
  setProfile,
  addPost,
  updateTextInput,
})(ProfileContainer);
