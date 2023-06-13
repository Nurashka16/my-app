import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import Preloader from "../Preloader/preloader";
import style from "./Profile.module.css";
const Profile = (props) => {
  return (
  <div>
      {!props.profilePage.user ? 
      <div>
        <img
          className={style.img}
          src="https://7oom.ru/wp-content/uploads/peizaji-01.jpg"
        />
        <div className={style.imgText}>ava + desc</div>
      </div>:
      <div>
        <img className={style.user}
        src="https://cdn-static.ntv.ru/home/news/20141208/putin1_vs.jpg" alt="" />
        <div>{props.profilePage.user.firstName}</div>
        <div>Город: Москва</div>
      </div>
      }
      <div className={style.content}>
        <MyPostsContainer />
      </div>
  </div>
  );
};
export default Profile;
