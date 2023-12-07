import style from "./Profile.module.css";
import Avatar from "../Common/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./Post/Post";

const Profile = (props) => {
  let messagesItems = props.posts.map((m) => (
    <Post key={m.id} id={m.id} message={m.message} number={m.number} />
  ));
  return (
    <div className={style.container}>
      <ProfileInfo />
      <div className={style.content}>{messagesItems}</div>
    </div>
  );
};
export default Profile;
