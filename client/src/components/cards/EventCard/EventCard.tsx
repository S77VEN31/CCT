// Styles
import "./EventCard.style.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../../enumerables/icons/icons";
// Components
import IconTextButton from "../../buttons/IconTextButton/IconTextButton";

interface EventCardProps {
  organizer: string;
  title: string;
  date: string;
  image?: string;
  description: string;
  location: string;
  buttonText?: string;
}

const EventCard = (props: EventCardProps) => {
  return (
    <div className="event-card">
      <div className="header">
        <div className="title-and-organizer">
          <h6 className="organizer medium">{props.organizer}</h6>
          <h4 className="title medium">{props.title}</h4>
        </div>
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
      </div>
      <div className="card-content">
        <h6 className="date medium">{props.date}</h6>
        <h6 className="description regular">{props.description}</h6>
      </div>
      <div className="footer">
        <IconTextButton
          buttonClassname="event-card-buttons"
          buttonText={props.buttonText}
        />
        <div className="location-container">
          <IconTextButton
            buttonClassname="event-card-buttons"
            icon={Icons.location}
          />
          <h6 className="medium">{props.location}</h6>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
