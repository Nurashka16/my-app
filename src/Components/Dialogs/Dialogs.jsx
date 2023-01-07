import UserName from "./UserName/UserName.jsx";
import Message from "./Message/Message.jsx";
import style from "./Dialogs.module.css";
import { Outlet } from "react-router-dom";
import BlockMess from "./BlockMess/BlockMess.jsx";
const Dialogs = (props) => {
  let dialogsItem = props.state.dialogs.map((d) => (
    <UserName key={d.id} id={d.id} name={d.name}/>
  ));
  let messagesItems = props.state.messages.map((m) => (
    <Message key={m.id} id={m.id} message={m.message} />
  ));
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsItem}
        <Outlet />
      </div>
      <div className={style.messages}>{messagesItems}</div>
      <BlockMess />
    </div>
  );
};
export default Dialogs;
