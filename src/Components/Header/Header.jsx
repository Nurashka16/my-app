import { Outlet } from "react-router-dom";
import style from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <img src="https://img.freepik.com/premium-vector/modern-badge-vkontakte-icon_578229-170.jpg"/>
          <div className={style.text}>ВКОНТАКТЕ</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
