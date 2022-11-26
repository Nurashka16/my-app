import style from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
const MyPosts = () => {
  return (
    <div>
      <div>
        My post
        <div>New post</div>
      </div>
      <div>
        <div className={style.item}>Post 1</div>
        <div>Post 2</div>
        < Post message="Hi!"/>
        < Post message="How are you?"/>
      </div>
    </div>
  );
};
export default MyPosts;
