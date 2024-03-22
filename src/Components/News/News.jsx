import React, { useRef } from "react";
import style from "./News.module.css";
import Wall from "./Wall/Wall";
import { useSelector } from "react-redux";
import NewPost from "./NewPost";
import Stories from "./Stories/Stories";
import { useTypedSelector } from "../../app/hooks/useTypedSelector";

const News = (props) => {
  // const posts = useSelector((state) => state.news.posts);
  const posts = useTypedSelector((state)=> state.news.posts)
  const ownerImg = useSelector((state) => state.authPage.avatar);
  const stories = useSelector((state) => state.news.stories);
  const walls = posts.map((post) => (
    <Wall
      name={post.communityName}
      key={post.id}
      id={post.id}
      text={post.text}
      number={post.number}
      like={post.like}
      comments={post.comments}
      share={post.share}
      viewed={post.viewed}
      date={post.date}
      img={post.img}
    />
  ));
  const ref = useRef();

  return (
    <div className={style.container}>
      <div className={style.stories} ref={ref}>
        <Stories>{stories}</Stories>
      </div>
      <div className={style.newPost}>
        <NewPost img={ownerImg} />
      </div>
      <div className={style.wall}>{walls}</div>
    </div>
  );
};

export default News;
