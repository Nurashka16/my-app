import style from "./Navbar.module.css";
import CostumLink from "./../CostumLink";
import Footer from "./Footer/Footer.jsx";
import { connect } from "react-redux";
import UserName from "../Dialogs/UserName/UserName";

export const Navbar = (props) => {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <div className={style.item}>
          <CostumLink className={style.link} to={`/profile/${props.id}`}>
            <img width="20" height="20"
              src={
                !props.userAvatar
                  ? "https://cdn-icons-png.flaticon.com/512/44/44948.png"
                  : "https://artjapan.ru/wp-content/uploads/2022/01/6d9834b8e903b9518dc5f74e33050283.jpg"
              }
              alt=""
            />{" "}
            {props.userName}
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/">
            Новости
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/friends">
            Рекомендация
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/notifications">
            Уведомления
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/dialogs/*">
            Мессенджер
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/users">
            Друзья
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/groups">
            Сообщества
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/photos">
            Фотография
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/video">
            Видео
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/musics">
            Музыка
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/servis">
            Сервисы
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/plays">
            Игры
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/trava">
            Закладки
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/fale">
            Файлы
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/reclam">
            Реклама
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/react">
            Реакции
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/search">
            Поиск
          </CostumLink>
        </div>
      </nav>
      <Footer />
    </div>
  );
};
const mapStateToProp = (state) => {
  return {
    id: state.authPage.id,
  };
};

export default connect(mapStateToProp)(Navbar);
