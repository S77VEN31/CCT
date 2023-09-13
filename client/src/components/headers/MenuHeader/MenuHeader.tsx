// Style
import "./MenuHeader.style.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../../enumerables/icons/icons";
// Components
import NotificationButton from "../../buttons/NotificationButton/NotificationButton";

const MenuHeader = () => {
  return (
    <div className="menu-header">
      <div className="icon-and-title">
        <div>
          <FontAwesomeIcon icon={Icons.menu} className="icon" />
        </div>
        <h2 className="semibold">Búsqueda</h2>
        <NotificationButton></NotificationButton>
      </div>
    </div>
  );
};
export default MenuHeader;
