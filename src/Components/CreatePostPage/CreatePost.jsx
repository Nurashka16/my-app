import style from "./CreatePost.module.css";
import { Icon28PictureOutline, Icon20Dropdown } from "@vkontakte/icons";
import { Icon28MusicOutline } from "@vkontakte/icons";
import { Icon28MoreHorizontal } from "@vkontakte/icons";
import { Icon28SettingsOutline } from "@vkontakte/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPost } from "../../redux/profile-reducer";
import { useNavigate } from "react-router-dom";
import FadeAnimation from "../Common/FadeAnimation/FadeAnimation";
import Alert from "../Common/Alert/Alert";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//добавить бургер "видно всем", новую страницу таймер,добавление фото, аудиозаписей,
//доп. бургер и расширение страницы

const CreatePost = (props) => {
  const navigate = useNavigate();
  const id = useSelector((state) => state.authPage.id);
  const text = useSelector((state) => state.dialogsPage.text);
  const valid = (name) =>
    yup.string().required("Нельзя опубликовать пустую запись");
  const schema = yup.object().shape({
    text: valid("text"),
  });
  const dispatch = useDispatch();
  const add = (value) => {
    return addPost(value);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur" });
  const onSubmit = (data) => {
    dispatch(addPost(data.text));
    reset();
    navigate("/profile/" + id);
  };

  return (
    <div className={style.createPost}>
      <form
        value={text}
        className={style.createPost_container}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={style.createPost_textArea}>
          <textarea
            {...register("text")}
            placeholder="Введите текст записи..."
            className={style.createPost_input}
          />
        </div>
        <FadeAnimation isShow={errors?.text}>
          <Alert type="error">{errors?.text?.message}</Alert>
        </FadeAnimation>
        <div className={style.createPost_containerSelect}>
          <div className={style.createPost_select}>
            <button className={style.createPost_btn__burger}>Видно всем</button>
            <Icon20Dropdown className={style.createPost_icon} />
          </div>

          <div className={style.createPost_select}>
            <button className={style.createPost_btn__burger}>Сейчас</button>
            <Icon20Dropdown className={style.createPost_icon} />
          </div>
        </div>
        <div className={style.createPost_footer}>
          <div className={style.createPost_buttonsAdd}>
            <Icon28PictureOutline color="#2688eb" />
            <Icon28MusicOutline color="#2688eb" />
            <Icon28MoreHorizontal color="#2688eb" />
          </div>
          <div className={style.createPost_buttonsCreate}>
            <Icon28SettingsOutline color="#2688eb" />
            <button className={style.createPost_btnCreate} type="submit">
              Опубликовать
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreatePost;
