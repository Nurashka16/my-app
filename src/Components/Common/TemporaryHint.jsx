import style from "../CreatePost/CreatePost.module.css";
import { Icon28ErrorCircleOutline } from "@vkontakte/icons";
import { useState } from "react";
import { Transition } from "react-transition-group";

function TemporaryHint (mess) {
  const [error, setError] = useState(false);
  return (
    <Transition in={error} timeout={3000}>
      {state => (
        <div className={`style.createPost_errorContainer ${state}`}>
          <Icon28ErrorCircleOutline color="red" />
          <div className={style.createPost_error}>{mess.message}</div>
        </div>
      )}
    </Transition>
  );
};

export default TemporaryHint;
