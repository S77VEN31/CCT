// React
import { Outlet } from "react-router-dom";
import { useState } from "react";
// Styles
import "./Menu.style.css";
// Components
import LateralNavbar from "../../../components/navbars/LateralNavbar/LateralNavbar";
import MenuHeader from "../../../components/headers/MenuHeader/MenuHeader";

const Menu = () => {
  const [title, setTitle] = useState("Perfil");
  return (
    <div className="menu-screen">
      <div className="main-container">
        <LateralNavbar setTitle={setTitle} />
        <div className="content-container">
          <MenuHeader title={title} />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
