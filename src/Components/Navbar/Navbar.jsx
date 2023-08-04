import style from "./Navbar.module.css";
import CostumLink from "./../CostumLink";
import Footer from "./Footer/Footer.jsx";

const Navbar = () => {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <div className={style.item}>
          <CostumLink
            className={style.link}
            to="/profile/de3d08e0-e04c-40dc-8552-ffcf19bb15ec"
          >
            Профиль
          </CostumLink>
        </div>
        <div className={style.item}>
          <CostumLink className={style.link} to="/new">
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
export default Navbar;
