import style from "../CreatePost/CreatePost.module.css";
import { Icon28ErrorCircleOutline } from "@vkontakte/icons";

const TemporaryHint = (mess) => {
  return (
    <div className={style.createPost_errorContainer}>
      <Icon28ErrorCircleOutline color="red" />
      <div className={style.createPost_error}>{mess.message}</div>
    </div>
  );
};

export default TemporaryHint;
