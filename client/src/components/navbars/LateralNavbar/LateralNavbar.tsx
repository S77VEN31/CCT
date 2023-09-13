// React
import { Link } from "react-router-dom";
// Styles
import "./LateralNavbar.style.css";
// Enumerables
import { RoutesList } from "../../../enumerables/routes/routes";

const LateralNavbar = () => {
  const { menuRoutes } = RoutesList;
  return (
    <div className="lateral-menu">
      <ul>
        {menuRoutes.map((route, key) => {
          return (
            <li key={key}>
              <Link className="route-link" to={route.path}>
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default LateralNavbar;
