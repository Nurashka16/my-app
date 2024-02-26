import React, { useRef } from "react";
import style from "./News.module.css";
import Status from "./Status";
import Wall from "./Wall/Wall";
import { useSelector } from "react-redux";
import NewPost from "./NewPost";

const News = (props) => {
  const posts = useSelector((state) => state.newsPage.posts);
  const ownerImg = useSelector((state) => state.authPage.avatar);
  const stories = useSelector((state) => state.newsPage.stories);
  const walls = posts.map((post) => <Wall post={post} />);
  const status = stories.map((stories) => <Status stories={stories} />);
  const ref = useRef();
  /**
   *
   * @param {React.WheelEvent<HTMLDivElement} e
   */
  const setScroll = (e) => {
    console.log(ref.current);
    ref.current.scrollBy(1000, 3000);
  };
  return (
    <div className={style.container}>
      <div className={style.status} ref={ref} 
       onWheel={(e) => setScroll(e)}
      >
        {status}
      </div>
      <div className={style.newPost}>
        <NewPost img={ownerImg} />
      </div>
      <div className={style.wall}>{walls}</div>
    </div>
  );
};

export default News;
