import React from "react";
import style from "./SignUp.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Field from "../../../../Common/Field";

const SignUp = (props) => {
  const valid = (name) =>
    yup
      .string()
      .required("обязательно к заполнению")
      .min(1, "обязательно содержать не менее 1-го символа")
      .max(11, "достигнуто максимальное количество символов");
  const schema = yup.object().shape({
    firstName: valid("firstName"),
    lastName: valid("lastName"),
    email: valid("email"),
    password: valid("password")
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  const onSubmit = (data) => {
    props.signUp(data)
    reset();
  };
  console.log(errors);
  return (
    <div className={style.signUp}>
      <form className={style.textField} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.textField__container}>
          <Field
            placeholder="имя"
            inputProps={{
              ...register("firstName"),
              className: style.textField__input,
            }}
            isError={errors?.firstName}
            errorMessage={errors?.firstName?.message ?? "error"}
          />
        </div>
        <div className={style.textField__container}>
          <Field
            placeholder="фамилия"
            inputProps={{
              ...register("lastName"),
              className: style.textField__input,
            }}
            isError={errors?.lastName}
            errorMessage={errors?.lastName?.message ?? "error"}
          />
        </div>
        <div className={style.textField__container}>
          <Field
            placeholder="эл. почта"
            inputProps={{
              ...register("email"),
              className: style.textField__input,
            }}
            isError={errors?.mail}
            errorMessage={errors?.password?.email ?? "error"}
          />
        </div>
        <div className={style.textField__container}>
          <Field
            placeholder="пароль"
            inputProps={{
              ...register("password"),
              className: style.textField__input,
            }}
            isError={errors?.password}
            errorMessage={errors?.password?.message ?? "error"}
          />
        </div>
        <div className={style.textField__container}>
          <Field
            placeholder="аватар"
            inputProps={{
              ...register("avatar"),
              className: style.textField__input,
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!isValid}
          style={
            !isValid
              ? { backgroundColor: "#5c9ce6" }
              : { backgroundColor: "#2d81e0" }
          }
          className={style.btn__login}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default SignUp;
/*
  return (
    <div className={style.signUp}>
      <form action="" className={style.textField}>
        {list}
      </form>
      <div className={style.footer}>
        <div className={style.btn__login} onClick={(e) => props.register()}>
          Зарегистрироваться
        </div>
      </div>
    </div>
  );*/
