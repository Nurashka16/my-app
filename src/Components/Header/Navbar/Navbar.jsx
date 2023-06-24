import style from "./Navbar.module.css";
import CostumLink from "../../CostumLink";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <CostumLink className={style.link} to="/profile">
          Profile
        </CostumLink>
      </div>
      <div className={style.item}>
        <CostumLink className={style.link} to="/dialogs/*">
          Message
        </CostumLink>
      </div>
      <div className={style.item}>
        <CostumLink className={style.link} to="/users">
          Users
        </CostumLink>
      </div>
      <div className={style.item}>
        <CostumLink className={style.link} to="/new">
          New
        </CostumLink>
      </div>
      <div className={style.item}>
        <CostumLink className={style.link} to="/music">
          Music
        </CostumLink>
      </div>
      <div className={style.item}>
        <CostumLink className={style.link} to="/settings">
          Settings
        </CostumLink>
      </div>
      <div className={style.item}>
        <CostumLink className={style.link} to="/friends">
          Friends
        </CostumLink>
      </div>
    </nav>
  );
};
export default Navbar;
