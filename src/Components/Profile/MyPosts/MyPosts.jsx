import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateTextInput(text);
  };
  let messagesItems = props.posts.map((m) => (
    <Post key={m.id} id={m.id} 
    message={m.message} number={m.number} />
  ));

  return (
    <div>
      <div className={style.postBlock}>
        <div className={style.title}>My post</div>
        <div className={style.areaBlock}>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
            ref={newPostElement}
            className={style.textArea}
          />
          <button onClick={props.addPost} className={style.button}>
            add post
          </button>
        </div>
      </div>
      {messagesItems}
    </div>
  );
};
export default MyPosts;
