import { MyPostsContainer } from "./MyPosts/MyPostContainer";
import Preloader from "../Preloader/preloader";
import style from "./Profile.module.css";
//{Preloader(true)}


const Profile = (props) => {
  return (
    <div>
      {!props.user ? (
        <div>
          {Preloader(true)}
        </div>
      ) : (
        <div>
          <div>{props.user.firstName} {props.user.lastName}</div>
          <div>Город: Москва</div>
          <img
            className={style.user}
            src="https://cdn-static.ntv.ru/home/news/20141208/putin1_vs.jpg"
            alt=""
          />
        </div>
      )}
      <div className={style.content}>
        <MyPostsContainer />
      </div>
    </div>
  );
};
export default Profile;
