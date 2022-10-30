import style from "./Navbar.module.css"
const Navbar = () => {
  return (
    <nav className={style.nav}>
      <a>
        <div className={style.item}>Profile</div>
      </a>
      <a>
        <div className={`${style.item} ${style.active}`} >Message</div>
      </a>
      <a>
        <div className={style.item}>New</div>
      </a>
      <a>
        <div className={style.item}>Music</div>
      </a>
      <a>
        <div className={style.item}>Settings</div>
      </a>
    </nav>
  );
};
export default Navbar;
