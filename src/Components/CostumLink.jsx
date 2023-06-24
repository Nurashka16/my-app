import { Link, useMatch } from "react-router-dom";
import style from "./Header/Navbar/Navbar.module.css";
const CostumLink = ({ children, to, ...props }) => {
  const isMatch = useMatch(to);
  return (
    <Link
      to={to}
      {...props}
      style={{ color: isMatch ? "red" : "white" }} >
      {children}
    </Link>
  );
};
export default CostumLink;
