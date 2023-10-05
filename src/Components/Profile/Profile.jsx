import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const ProfileTest = (props) => {
  return (
    <div className={style.container}>
      {props.userId == props.id ? (
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
export default ProfileTest;
