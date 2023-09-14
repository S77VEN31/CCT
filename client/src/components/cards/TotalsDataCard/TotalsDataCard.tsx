// Styles
import "./TotalsDataCard.style.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface TotalsDataCardProps {
  title: string;
  data: number;
  icon: IconDefinition;
  className?: string;
}

const TotalsDataCard = (props: TotalsDataCardProps) => {
  return (
    <div className={`totals-data-card ${props.className}`}>
      <div className="icon-container">
        <FontAwesomeIcon icon={props.icon} className="icon" />
      </div>
      <div className="title-and-total">
        <h5 className="medium">{props.title}</h5>
        <h1 className="semibold">{props.data}</h1>
      </div>
    </div>
  );
};
export default TotalsDataCard;
