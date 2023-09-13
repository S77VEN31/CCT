// Styles
import "./Menu.style.css";
// Components
import { Outlet, Link } from "react-router-dom";
// Enumerables
import { RoutesList } from "../../../enumerables/routes/routes";

function Menu() {
  const { menuRoutes } = RoutesList;
  return (
    <div className="screen">
      <div className="main-container">
        <div className="lateral-menu">
          <ul>
            {menuRoutes.map((route, key) => {
              return (
                <li key={key}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="content-container">
          <h1>Content</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Menu;
