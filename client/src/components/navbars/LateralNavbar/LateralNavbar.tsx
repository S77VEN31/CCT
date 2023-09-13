// React
import { useState } from "react";
import { Link } from "react-router-dom";
// Styles
import "./LateralNavbar.style.css";
// Svgs
import { Svgs } from "../../../enumerables/svgs/svgs";
// Enumerables
import { RoutesList } from "../../../enumerables/routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LateralNavbar = () => {
  const { menuRoutes } = RoutesList;
  const [active, setActive] = useState<string>("/menu/profile");
  return (
    <div className="lateral-menu">
      <div className="app-logo">{Svgs.logo({})}</div>
      <ul>
        {menuRoutes.map((route, key) => {
          return (
            <li
              onClick={() => setActive(route.path)}
              className={`${active === route.path ? "active" : ""}`}
              key={key}
            >
              <Link className="route-link" to={route.path}>
                <FontAwesomeIcon icon={route.icon} className="icon" />
                <h5 className="medium">{route.name}</h5>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default LateralNavbar;
