import "./AsociationCard.style.css";

interface asociationCardProps {
    name?: string | null;
    carrer?: string | null;
    photo?: string | null;
  }

const AsociationCard = (props: asociationCardProps) => {
  return (
    <div className="search-container">
      <div className="photo-container">{props.photo}</div>
      <div className="info-container">
        <div className="title-container">
          <h6 className="title semibold">{props.name}</h6>
        </div>
        <div className="subtitle-container">
          <h6 className="subtitle medium">{props.carrer}</h6>
        </div>
      </div>
    </div>
  );
}
export default AsociationCard;