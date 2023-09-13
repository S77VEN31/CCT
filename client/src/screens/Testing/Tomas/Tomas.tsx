import "./Tomas.style.css";

interface asocProps {
  asociationName?: string | null;
  asociationCarrer?: string | null;
  asociationPhoto?: string | null;
}

const MovingAsocCard = (props: asocProps) => {
  return (
    <div className="screen">
      <div className="asoc-card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <path
            d="M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z"
            fill="#D3D3D3"
          />
        </svg>
        <div className="asoc-info">
          <div className="asoc-name">
            <text className="title">{props.asociationName}dyka46i4</text>
          </div>
          <div className="subtitle-container">
            <text className="subtitle">{props.asociationCarrer}zdtjrj</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingAsocCard;
