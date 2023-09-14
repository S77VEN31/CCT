//Styles
import "./AsociationCard.style.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../../../../enumerables/icons/icons";

interface asociationCardProps {
    name?: string | null;
    carrer?: string | null;
    image?: string | null;
  }

const AsociationCard = (props: asociationCardProps) => {
  return (
    <div className="asociation-card">
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
      <div className="asociation-info">
          <h6 className="title semibold">{props.name}</h6>
          <h6 className="subtitle medium">{props.carrer}</h6>
      </div>
    </div>
  );
}
export default AsociationCard;