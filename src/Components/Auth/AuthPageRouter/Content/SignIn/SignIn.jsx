import React from "react";
import style from "./SignIn.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Field from "../../../../Common/Field/Field";

const SignIn = (props) => {
  const valid = (name) =>
    yup
      .string()
      .required("обязательно к заполнению")
      .min(1, "обязательно содержать не менее 1-го символа")
      .max(11, "достигнуто максимальное количество символов");
  const schema = yup.object().shape({
    numberOrMail: valid("numberOrMail"),
    password: valid("password"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  const onSubmit = (data) => {
    props.signIn(data.numberOrMail, data.password);
    reset();
  };
  return (
    <div className={style.signIn}>
      <form className={style.textField} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.textField__container}>
          <Field
            placeholder="эл. почта или номер телефона"
            inputProps={{
              ...register("numberOrMail"),
              className: style.textField__input,
            }}
            isError={errors?.numberOrMail}
            errorMessage={errors?.numberOrMail?.message ?? "error"}
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
          Продолжить
        </button>
      </form>
    </div>
  );
};

export default SignIn;
