import style from "./Profile.module.css";
import OwnerProfile from "./OwnerProfile";
import Wall from "../News/Wall/Wall";
import UserProfile from './UserProfile';
//нужно разделить данные для поста на 2, чтобы в owner/userProfile возвращались и свои посты  

const Profile = (props) => {
  let posts = props.posts.map((post) => (
    <Wall name={props.ownerFullName}
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
      <div className={style.content}>{posts}</div>
    </div>
  );
};
export default Profile;
