// React
import { Link } from "react-router-dom";
// Styles
import "./LateralNavbar.style.css";
// Enumerables
import { navbarRoutes } from "../../../enumerables/navbarRoutes/navbarRoutes";

const LateralNavbar = () => {
  return (
    <div className="lateral-menu">
      <ul>
        {navbarRoutes.map((route, key) => {
          return (
            <li key={key}>
              <Link to={route.path}>{route.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default LateralNavbar;
