import React from "react";
import style from "./CreatePost.module.css";
import { Icon28PictureOutline } from "@vkontakte/icons";
import { Icon28MusicOutline } from "@vkontakte/icons";
import { Icon28MoreHorizontal } from "@vkontakte/icons";
import { Icon28SettingsOutline } from "@vkontakte/icons";
import { Icon28ErrorCircleOutline } from "@vkontakte/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CreatePost = (props) => {
  const valid = (name) =>
    yup
      .string()
      .required("Нельзя опубликовать пустую запись")
      .max(100, "Достигнуто максимальное количество символов");
  const schema = yup.object().shape({
    text: valid("text"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur" });
  const onSubmit = (data) => {
    props.addPost(data.text);
    reset();
  };
  console.log(errors);
  return (
    <div className={style.createPost}>
      <form className={style.createPost_container} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.createPost_textArea}>
          <textarea
            {...register("text")}
            placeholder="Введите текст записи..."
            className={style.createPost_input}
          />

          {errors?.text && (
            <div className={style.createPost_errorContainer}>
              <Icon28ErrorCircleOutline color="red"/>
              <div className={style.createPost_error}> {errors?.text.message}</div>
            </div>
          )}
        </div>
        <div className={style.createPost_containerSelect}>
          <div className={style.createPost_select}>
            <button className={style.createPost_btn__burger}>Видно всем</button>
            <svg
              className={style.createPost_icon}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="12"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                fill="currentColor"
                d="M4.45 3.7a.9.9 0 0 0-1.1 1.4l4.1 3.21a.9.9 0 0 0 1.1 0l4.1-3.2a.9.9 0 1 0-1.1-1.42L8 6.46 4.45 3.7Z"
              ></path>
            </svg>
          </div>

          <div className={style.createPost_select}>
            <button className={style.createPost_btn__burger}>Сейчас</button>
            <svg
              className={style.createPost_icon}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="12"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                fill="currentColor"
                d="M4.45 3.7a.9.9 0 0 0-1.1 1.4l4.1 3.21a.9.9 0 0 0 1.1 0l4.1-3.2a.9.9 0 1 0-1.1-1.42L8 6.46 4.45 3.7Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className={style.createPost_footer}>
          <div className={style.createPost_buttonsAdd}>
            <Icon28PictureOutline  color="#2688eb" />
            <Icon28MusicOutline color="#2688eb" />
            <Icon28MoreHorizontal color="#2688eb" />
          </div>
          <div className={style.createPost_buttonsCreate}>
            <Icon28SettingsOutline color="#2688eb" />
            <button
              className={style.createPost_btnCreate}
              type="submit"
            >
              Опубликовать
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreatePost;
/*
      /*{messagesItems}
  let newPostElement = React.createRef();
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateTextInput(text);
  };
  let messagesItems = props.posts.map((m) => (
    <Post key={m.id} id={m.id} 
    message={m.message} number={m.number} />
  ));
<div>
      <div className={style.postBlock}>
        <div className={style.title}>My post</div>
        <div className={style.areaBlock}>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
            ref={newPostElement}
            className={style.textArea}
          />
          <button onClick={props.addPost} className={style.button}>
            add post
          </button>
        </div>
      </div>
      {messagesItems}
    </div>*/
