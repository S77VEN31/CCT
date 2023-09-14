// React
import { Outlet } from "react-router-dom";
// Styles
import "./Menu.style.css";
// Components
import LateralNavbar from "../../../components/navbars/LateralNavbar/LateralNavbar";
import MenuHeader from "../../../components/headers/MenuHeader/MenuHeader";

const Menu = () => {
  return (
    <div className="menu-screen">
      <div className="main-container">
        <LateralNavbar />
        <div className="content-container">
          <MenuHeader />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
