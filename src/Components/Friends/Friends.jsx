import Friend from "./Friend/Friend";
import style from "./Friends.module.css";
let Friends = (props) => {
  console.log(props);
  let profileItem = props.friendsPage.profile.map((m) => (
    <Friend key={m.id} id={m.id} url={m.url} name={m.name}
    age={m.age} />
  ));
  return (
    <div className={style.container}>
      <div className={style.title}>All Friends:</div>
      {profileItem}
    </div>
  );
};
export default Friends;
