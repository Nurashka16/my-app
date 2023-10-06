import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Avatar from "../Common/Avatar";

const Profile = (props) => {
  return (
    <div className={style.container}>
      {props.user.id == props.urlId ? (
        <div>
          <Avatar url={props.user.avatar} width="50px" height="50px" />
          <div>
            {props.user.firstName} {props.user.lastName}
          </div>
        </div>
      ) : (
        <div>
          <div>
            {props.user.firstName} {props.user.lastName}
          </div>
          <div>Город: Москва</div>
          <div>Имя: Владимир</div>
          <img
            className={style.user}
            src="https://cdn-static.ntv.ru/home/news/20141208/putin1_vs.jpg"
            alt=""
          />
        </div>
      )}
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
