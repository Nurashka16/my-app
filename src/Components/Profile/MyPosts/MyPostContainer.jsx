import React from "react";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
let mapDispatchToState = (dispatch) => {
  return {
    addPost: () => (
      dispatch(addPostCreator())
    ),
    updateNewPost: (text) => {
      let action = updateNewPostTextCreator(text);
      return dispatch(action);
    }
  }
}
export const MyPostsContainer = connect(mapStateToProps,
  mapDispatchToState)(MyPosts);

