import { Outlet } from "react-router-dom";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <header className={style.header}>
        <img src="https://www.logodesignlove.com/wp-content/uploads/2022/01/logo-wave-symbol-01.jpg"></img>
      </header>
      <Outlet />
      -------------------------------- Контент дальше-------------------------------------------
    </div>
  );
};
export default Header;
