import Friend from "./Friend/Friend";
import style from "./Friends.module.css";
import Burger from "../menuBurger/Burger";

let Friends = (props) => {
  let block = props.friendsPage.block;
  console.log(props);
  let profileItem = props.friendsPage.profile.map((m) => (
    <Friend key={m.id} id={m.id} url={m.url} name={m.name} age={m.age} />
  ));

  return (
    <div className={style.container}>
      <div className={style.title}>
        {block ? (
          <Burger closeBlock={props.closeBlock} profiles={props.profiles} />
        ) : (
          <button onClick={() => props.openBlock()}>All Friends:</button>
        )}
      </div>
      {/*{profileItem}*/}
    </div>
  );
};
export default Friends;
