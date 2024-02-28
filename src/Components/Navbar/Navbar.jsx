import style from "./Navbar.module.css";
import { Link} from "react-router-dom";
import Footer from "./Footer/Footer.jsx";
import Avatar from "../Common/Avatar/Avatar";

const Navbar = (props) => {
  const menu = props.list.map((list) => {
    return list.path == "profile" ? (
      <div className={style.ownerPanel} key={list.id}>
        <Link className={style.link} to={`/profile/${props.ownerId}`}>
          <Avatar url={props.ownerAvatar} width="30px" height="30px" />
          <div className={style.userName}>{props.ownerFullName}</div>
        </Link>
      </div>
    ) : (
      <Link to={list.path} className={style.item} key={list.id}>
        <div className={style.link}>
          <div className={style.icon}>{list.icon}</div>
          <div className={style.text}>{list.name}</div>
        </div>
      </Link>
    );
  });
  return (
    <div className={style.container}>
      <nav className={style.nav}>{menu}</nav>
      <Footer clearData={props.clearData} />
    </div>
  );
};

export default Navbar;
