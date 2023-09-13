import "./AsociationCard.style.css";

interface asociationCardProps {
    name?: string | null;
    carrer?: string | null;
    photo?: string | null;
  }

const AsociationCard = (props: asociationCardProps) => {
  return (
    <div className="search-container">
      <div className="photo-container">
          {props.photo}
      </div>
      <div className="info-container">
        <div className="title-container">
          <text className="title semibold-h6">{props.name}</text>
        </div>
        <div className="subtitle-container">
          <text className="subtitle medium-h6">{props.carrer}</text>
        </div>
      </div>
    </div>
  );
}
export default AsociationCard;