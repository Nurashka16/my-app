import UserName from "./UserName/UserName.jsx";
import Message from "./Message/Message.jsx";
import style from "./Dialogs.module.css";
import BlockMessContainer from "./BlockMess/BlockMessContainer.jsx";
const Dialogs = (props) => {
  let dialogsItem = props.dialogs.map((d) => (
    <UserName key={d.id} id={d.id} name={d.name} />
  ));
  let messagesItems = props.messages.map((m) => (
    <Message key={m.id} id={m.id} message={m.message} />
  ));
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsItem}</div>
      <div className={style.messages}>
        {messagesItems}
        <div>
          <div>
            <BlockMessContainer
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
