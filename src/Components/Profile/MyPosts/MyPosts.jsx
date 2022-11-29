import style from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
        <div>
          <input type="text" />
          <input type="button" value="add post" />
        </div>
        <Post message="Hi Danya" likes="20"/>
        <Post message="I love you" likes="0"/>
      </div>
    </div>
  );
};
export default MyPosts;
