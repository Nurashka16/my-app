import style from "./Header.module.css";
import Logotype from "../Logotype/Logotype";
import Search from "../Common/Search/Search";
import { NavLink } from "react-router-dom";
import TitleContainer from "./Title/TitleContainer";

const Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.body}>
          <div className={style.logotype}>
            <NavLink to={"/"} className={style.logotype_container}>
              <div className={style.logotype_link}>
                <Logotype />
              </div>
            </NavLink>
          </div>
          <div className={style.header_components}>
            <div className={style.title}>
              <TitleContainer />
            </div>
            <form action="#" className={style.search}>
              <Search width={"264px"} height={"32px"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
