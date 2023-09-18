import style from "./Header.module.css";
import Logotype from "../Logotype/Logotype";
import Search from "./Search/Search";
import Title from "./Title/Title";
import { TitleContainer } from "./Title/TitleContainer";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.logotype}>
          <NavLink to={"/"} className={style.logotype_link}>
            {" "}
            <Logotype />{" "}
          </NavLink>
        </div>
        <div className={style.header_components}>
          <div className={style.title}>
            <TitleContainer />
          </div>
          <div className={style.search}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
