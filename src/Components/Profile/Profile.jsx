import MyPostsContainer from "./MyPosts/MyPostContainer";
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
        <MyPostsContainer />
      </div>
    </div>
  );
};
export default Profile;
