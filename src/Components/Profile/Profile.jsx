import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Avatar from "../Common/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {
  let messagesItems = props.posts.map((m) => (
    <Post key={m.id} id={m.id} message={m.message} number={m.number} />
  ));
  return (
    <div className={style.container}>
      <ProfileInfo />
      <div className={style.content}>
        {messagesItems}
        {/*<MyPosts
          addPost={props.addPost}
          updateTextInput={props.updateTextInput}
          posts={props.posts}
          newPostText={props.newPostText}
  />*/}
      </div>
    </div>
  );
};
export default Profile;
