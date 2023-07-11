import style from "./Header.module.css";
import Logotype from "./Logotype/Logotype";
import Search from "./Search/Search";
import Title from "./Title/Title";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <Logotype/>
        <Title/>
        <Search/>
      </div>
    </div>
  );
};
export default Header;
