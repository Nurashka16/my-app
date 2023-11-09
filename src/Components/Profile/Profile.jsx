import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Avatar from "../Common/Avatar";

const Profile = (props) => {
  console.log(props.urlId)
  return (
    <div className={style.container}>
      {props.user.id == props.urlId ? (
        <div>
          <Avatar url={props.user.avatar} width="50px" height="50px" />
          <div>
            {props.user.firstName} {props.user.lastName}
          </div>
        </div>
      ) : "технические проблемы"}
      <div className={style.content}>
        <MyPosts
          addPost={props.addPost}
          updateTextInput={props.updateTextInput}
          posts={props.posts}
          newPostText={props.newPostText}
        />
      </div>
    </div>
  );
};
export default Profile;
