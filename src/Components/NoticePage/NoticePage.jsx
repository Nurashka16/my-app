import React from "react";
import { useState } from "react";
import style from "./NoticePage.module.css"
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const NoticePage = (props) => {
  
  const valid = (name) => yup
  .string()
  .required(name)
  .min(2, name)

  const valid2 = (name) => yup
  .string()
  .required(name)
  .min(2, name)


  const schema = yup.object().shape({
    mobileNumber: yup
    .string()
    .required('')
    .min(2, ''),
    lastName: valid('last').max(11, '1')

  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema)});
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber")}
        />
        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="Yes"
        />
        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="No"
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default NoticePage;

/* для статуса код
  const [status, setStatus] = useState({
    text: "hi, how are you?",
    isActive: false,
  });
  const toggleStatus = (value) => {
    setStatus({ ...status, isActive: value });
  };
       {status.isActive ? (
        <input
          type="text"
          autoFocus={true}
          onBlur={() => toggleStatus(false)}
          value={status.text}
        />
      ) : (
        <span onClick={() => toggleStatus(true)}>{status.text}</span>
      )}*/