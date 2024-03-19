import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ProfilePage from "./ProfilePage";
import { addPost, setProfile } from "../../redux/profile-slice";
import { useEffect, useMemo } from "react";
import {
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
      <ProfilePage
        urlId={id}
        userInfo={props.userInfo}
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
    userInfo: getStateUserInfo(state),
    isFetching: getStateIsFetching(state),
    ownerId: getStateOwnerId(state),
    ownerFullName: getStateOwnerFullName(state),
    ownerAvatar: getStateOwnerAvatar(state),
    // friends: state.ProfilePage.friends,
    // count: state.ProfilePage.count
  };
};

export default connect(mapStateToProps, {
  setProfile,
  addPost,
})(ProfileContainer);
