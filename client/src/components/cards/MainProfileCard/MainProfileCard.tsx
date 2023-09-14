// Styles
import "./MainProfileCard.style.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../../enumerables/icons/icons";

interface MainProfileCardProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

const MainProfileCard = (props: MainProfileCardProps) => {
  return (
    <div className="main-profile-card">
      <div className="profile-container">
        {props.image ? (
          <img
            src={props.image}
            alt="Profile image"
            className="profile-image"
          />
        ) : (
          <FontAwesomeIcon icon={Icons.user} className="icon" />
        )}
      </div>
      <div className="title-and-subtitle">
        <h6 className="title semibold">Iniciar</h6>
        <h6 className="subtitle regular">dasdasd</h6>
      </div>
    </div>
  );
};
export default MainProfileCard;
