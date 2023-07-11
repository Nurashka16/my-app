import React from 'react';
import style from "./Authorization.module.css";
//настроить header чтобы он мог работать без других комп

const Authorization = () => {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
         Header
      </header>
      <main className={style.container}>
         <div className={style.installApp}>
            Установить приложение
         </div>
         <div className={style.signIn}>
            Войти по почте или по номеру
         </div>
         <div className={style.register}>
            Зарегистрироваться
         </div>
      </main>
      <footer className={style.footer}>
         <div className={style.languages}>
            языки
         </div>
         <div className={style.version}>
            версия для пк
         </div>
      </footer>
    </div>
  )
}

export default Authorization