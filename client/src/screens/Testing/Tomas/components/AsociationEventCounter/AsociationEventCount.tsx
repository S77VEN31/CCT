//Styles
import './AsociationEventCount.style.css'
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../../../../enumerables/icons/icons";

interface AsociationEventCountProps {
    name?: string;
    amount?: number;
    image?: string;
  }

const AsociationEventCount = (props:AsociationEventCountProps) => {
  return (
    <div className="asociation-event-count">
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
            <h6 className="subtitle medium">{props.amount} eventos activos</h6>
        </div>
    </div>
  )
}
export default AsociationEventCount;
