import "./MainMenu.style.css";
import LateralNavbar from "../../components/navbars/LateralNavbar/LateralNavbar";
const MainMenu = () => {
  return (
    <div className="main-container">
      <LateralNavbar />
      <div className="content-container">
        <h1>Content</h1>
      </div>
    </div>
  );
};
export default MainMenu;
