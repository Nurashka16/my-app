import style from "./ProfilePage.module.css";
import OwnerProfile from "./Profile/OwnerProfile";
import Wall from "../News/Wall/Wall";
import UserProfile from "./Profile/UserProfile";
import Friends from "./Friends/Friends";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost/CreatePost";
import MediaResources from "./MediaResources/MediaResources";

//нужно разделить данные для поста на 2, чтобы в owner/userProfile возвращались и свои посты

const Profile = (props) => {
  const count = useSelector((state) => state.profilePage.friendsCount);
  const friends = useSelector((state) => state.profilePage.friends);
  // const postsData = useSelector((state) => state.newsPage.posts);
  // let posts = postsData.map((post) => (
  //   <Wall
  //     name={props.ownerFullName}
  //     key={post.id}
  //     id={post.id}
  //     text={post.text}
  //     number={post.number}
  //     like={post.like}
  //     comments={post.comments}
  //     share={post.share}
  //     viewed={post.viewed}
  //     date={post.date}
  //     img={post.img}
  //   />
  // ));

  // const ref = useRef(undefined);
  //   const offScroll = () => {
  //     ref.current?.offsetParent.style
  //   }
  return (
    <div className={style.container}>
      {props.ownerId == props.userInfo.id ? (
        <OwnerProfile
          name={props.ownerFullName}
          id={props.ownerId}
          avatar={props.ownerId}
        />
      ) : (
        <UserProfile
          avatar={props.userInfo.avatar}
          name={props.userInfo.firstName + " " + props.userInfo.lastName}
          id={props.userInfo.id}
        />
      )}
      <Link to="/friends" className={style.friends}>
        <Friends users={friends} count={count} />
      </Link>
      <div className={style.tab}>
        <MediaResources />
      </div>

      <Link to="/createPost" className={style.createPost}>
        <CreatePost />
      </Link>
      {/* <div className={style.content}>{posts}</div> */}
    </div>
  );
};
export default Profile;
