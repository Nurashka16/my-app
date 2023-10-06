import style from "./Navbar.module.css";
import CostumLink from "./../CostumLink";
import Footer from "./Footer/Footer.jsx";
import { connect } from "react-redux";
import Avatar from "../Common/Avatar";

export const Navbar = (props) => {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <div className={style.ownerPanel}>
          <CostumLink className={style.link} to={`/profile/${props.id}`}>
            <Avatar url={props.userAvatar} width="36px" height="36px" />
            <div className={style.userName}>{props.userName}</div>
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/">
            Новости
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/recommendation">
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
          <CostumLink className={style.link} to="/friends">
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
