// React
import { Outlet } from "react-router-dom";
// Styles
import "./Menu.style.css";
// Components
import LateralNavbar from "../../../components/navbars/LateralNavbar/LateralNavbar";

const Menu = () => {
  return (
    <div className="menu-screen">
      <div className="main-container">
        <LateralNavbar />
        <div className="content-container">
          <h1>Content</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Menu;
