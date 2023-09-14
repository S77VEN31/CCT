// Style
import "./MenuHeader.style.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../../enumerables/icons/icons";
// Components
import NotificationButton from "../../buttons/NotificationButton/NotificationButton";
import MainProfileCard from "../../cards/MainProfileCard/MainProfileCard";

interface MenuHeaderProps {
  title: string;
}

const MenuHeader = (props: MenuHeaderProps) => {
  return (
    <div className="menu-header">
      <div className="icon-and-title">
        <FontAwesomeIcon icon={Icons.menu} className="icon" />
        <h2 className="semibold">{props.title}</h2>
      </div>
      <div className="buttons-and-profile">
        <div className="buttons">
          <NotificationButton icon={Icons.news} notifications={0} />
          <NotificationButton icon={Icons.email} notifications={1} />
        </div>
        <MainProfileCard image="https://www.elmueble.com/medio/2023/04/14/gato-de-raza-ragdoll_5c5827ec_230414185205_1000x1493.jpg" />
      </div>
    </div>
  );
};
export default MenuHeader;
