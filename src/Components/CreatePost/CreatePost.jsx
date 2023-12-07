import React, { useState } from "react";
import style from "./CreatePost.module.css";
import { Icon28PictureOutline } from "@vkontakte/icons";
import { Icon28MusicOutline } from "@vkontakte/icons";
import { Icon28MoreHorizontal } from "@vkontakte/icons";
import { Icon28SettingsOutline } from "@vkontakte/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPost } from "../../redux/profile-reducer";
import { useNavigate } from "react-router-dom";
import TemporaryHint from "../Common/TemporaryHint";

const CreatePost = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    isActive: false,
  });
  const toggleError = (value) => {
    setError({ isActive: value });
  };
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
    console.log(data.text);
    /*addPost(data.text);
    reset();
    navigate('/profile');*/
  };
  return (
    <div className={style.createPost}>
      <form
        className={style.createPost_container}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={style.createPost_textArea}>
          <textarea
            {...register("text")}
            placeholder="Введите текст записи..."
            className={style.createPost_input}
          />
          {errors?.text && TemporaryHint(errors.text)}
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
