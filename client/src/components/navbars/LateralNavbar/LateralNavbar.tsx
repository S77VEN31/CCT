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

interface LateralNavbarProps {
  setTitle: (title: string) => void;
}

const LateralNavbar = (props: LateralNavbarProps) => {
  const { menuRoutes } = RoutesList;
  const [active, setActive] = useState<string>("/menu/profile");
  const handleOnClick = (route: string, title: string) => {
    setActive(route);
    props.setTitle(title);
  };
  return (
    <div className="lateral-menu">
      <div className="app-logo">{Svgs.logo({})}</div>
      <ul>
        {menuRoutes.map((route, key) => {
          return (
            <li
              onClick={() => {
                handleOnClick(route.path, route.name);
              }}
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
