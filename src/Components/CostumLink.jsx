import { Link, useMatch } from "react-router-dom";
const CostumLink = ({ children, to, ...props }) => {
  const isMatch = useMatch(to);
  return (
    <Link to={to} {...props} style={{ color: isMatch ? "red" : "" }}>
      {children}
    </Link>
  );
};
export default CostumLink;
