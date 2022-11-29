import style from "./Navbar.module.css";
import CostumLink from "../../CostumLink";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <CostumLink to="/Profile">Profile</CostumLink>
      </div>
      <div className={`${style.item} ${style.active}`}>
        <CostumLink className={style.link} to="/Dialogs">
          Message
        </CostumLink>
      </div>
      <div className={style.item}>New</div>
      <div className={style.item}>Music</div>
      <div className={style.item}>Settings</div>
    </nav>
  );
};
export default Navbar;
