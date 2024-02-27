import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile/Profile";
import { addPost, setProfile } from "../../redux/profile-reducer";
import { useEffect, useMemo } from "react";
import {
  getStatePosts,
  getStateUserInfo,
  getStateIsFetching,
  getStateOwnerId,
  getStateOwnerFullName,
  getStateOwnerAvatar,
} from "../Common/Selector";
import Preloader from "../Preloader/preloader";

const ProfileContainer = (props) => {
  const { id } = useParams();
  useEffect(() => {
    props.setProfile(id);
  }, [id]);

  return (
    <>
      <Preloader isFetching={props.isFetching} />
      <Profile
        urlId={id}
        userInfo={props.userInfo}
        posts={props.posts}
        addPost={props.addPost}
        ownerId={props.ownerId}
        ownerFullName={props.ownerFullName}
        ownerAvatar={props.ownerAvatar}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: getStatePosts(state),
    userInfo: getStateUserInfo(state),
    isFetching: getStateIsFetching(state),
    ownerId: getStateOwnerId(state),
    ownerFullName: getStateOwnerFullName(state),
    ownerAvatar: getStateOwnerAvatar(state),
  };
};

export default connect(mapStateToProps, {
  setProfile,
  addPost,
})(ProfileContainer);
