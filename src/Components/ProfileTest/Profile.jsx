import { MyPostsContainer } from "./MyPosts/MyPostContainer";
import style from "./Profile.module.css";

const ProfileTest = (props) => {
  return (
    <div>
      {props.userId==props.id ? (
        <div>
          <img
            className={style.profile__img}
            src="https://artjapan.ru/wp-content/uploads/2022/01/6d9834b8e903b9518dc5f74e33050283.jpg"
            alt=""
          />
          <div>Нурайым Тилепова</div>
        </div>
      ) : (
        <div>
          <div>
            {props.user.firstName} {props.user.lastName}
          </div>
          <div>Город: Москва</div>
          <img
            className={style.user}
            src={
              props.user.avatar
                ? "https://cdn-static.ntv.ru/home/news/20141208/putin1_vs.jpg"
                : props.user.avatar
            }
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
export default ProfileTest;
