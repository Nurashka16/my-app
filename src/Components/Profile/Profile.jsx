import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
const Profile = (props) => {
  return (
    <div>
      <div>
        <img
          className={style.img}
          src="https://7oom.ru/wp-content/uploads/peizaji-01.jpg"
        ></img>
        <div className={style.imgText}>ava + desc</div>
      </div>
      <div className={style.content}>
        <MyPosts 
        posts={props.profilePage.posts} 
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};
export default Profile;
