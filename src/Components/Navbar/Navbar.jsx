import style from "./Navbar.module.css";
import CostumLink from "./../CostumLink";
import Footer from "./Footer/Footer.jsx";
import Avatar from "../Common/Avatar";

const Navbar = (props) => {
  /*to={list.path}*/
  const menu = props.list.map((list) => {
    return list.navbar.name == "Мой Профиль" ? (
      <div className={style.ownerPanel} key={list.id}>
        <CostumLink className={style.link} to={`/profile/${props.id}`}>
          <Avatar url={props.userAvatar} width="36px" height="36px" />
          <div className={style.userName}>
            {props.userName ? "Нурайым Тилепова" : props.userName}
          </div>
        </CostumLink>
      </div>
    ) : (
      <div className={style.item} key={list.id}>
        <CostumLink to={list.path} className={style.link}>
          <div className={style.icon}>{list.navbar.icon}</div>
          <div className={style.text}>{list.navbar.name}</div>
        </CostumLink>
      </div>
    );
  });
  return (
    <div className={style.container}>
      <nav className={style.nav}>{menu}</nav>
      <Footer />
    </div>
  );
};

export default Navbar;

/*}
    <div className={style.ownerPanel}>
      <CostumLink className={style.link} to={`/profile/${props.id}`}>
        <Avatar url={props.userAvatar} width="36px" height="36px" />
        <div className={style.userName}>{props.userName? "Нурайым Тилепова" :  props.userName}</div>
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
      <CostumLink className={style.link} to="/emptyPage">
        Уведомления
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/mail">
        Мессенджер
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/users">
        Друзья
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/emptyPage">
        Сообщества
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/emptyPage">
        Фотография
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/emptyPage">
        Видео
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/musics">
        Музыка
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/emptyPage">
        Сервисы
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/emptyPage">
        Игры
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/emptyPage">
        Закладки
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/friends">
        Файлы
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/emptyPage">
        Реклама
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/emptyPage">
        Реакции
      </CostumLink>
    </div>
    <div className={style.item}>
      <CostumLink className={style.link} to="/emptyPage">
        Поиск
      </CostumLink>
</div>*/
