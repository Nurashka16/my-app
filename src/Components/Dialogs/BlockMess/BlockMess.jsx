import React from 'react';
import style from "./BlockMess.module.css";
const BlockMess = () => {
   let newMessElement = React.createRef();
   let addMess = () => {
      let text = newMessElement.current.value;
      alert(text);
   }
  return (
    <div className={style.blockMess}>
      <textarea ref={newMessElement} className={style.textArea}></textarea>
      <button onClick={addMess} className={style.button}>Add message</button>
    </div>
  )
}

export default BlockMess;