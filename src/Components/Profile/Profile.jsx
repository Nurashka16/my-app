import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src="https://cdn.maximonline.ru/39/1a/96/391a969dcabca3f6dcd9fa14951cea15/1000x600_21_5b89cd16b926c4e447a68435cfc867df@1200x830_0xac120005_1647304151528085193.jpg"></img>
      </div>
      <img src="https://7oom.ru/wp-content/uploads/peizaji-01.jpg"></img>
      <div>ava + desc</div>
      <div>
        My post
        <div>New post</div>
      </div>
      <div>
      <MyPosts />
        <div>Post 2</div>
      </div>
    </div>
  );
};
export default Profile;
