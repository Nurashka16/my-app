import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
const Profile = () => {
  return (
    <div >
      <img className={style.img} src="https://7oom.ru/wp-content/uploads/peizaji-01.jpg"></img>
      <div className={style.content}><div>ava + desc</div>
      <div>
      <MyPosts />
      </div>
      </div>
    </div>
  );
};
export default Profile;
