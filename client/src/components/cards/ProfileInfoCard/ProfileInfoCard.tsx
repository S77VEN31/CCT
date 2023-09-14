// Styles
import "./ProfileInfoCard.style.css";
// Svgs
import { Svgs } from "../../../enumerables/svgs/svgs";

interface ProfileInfoCardProps {
  title: string;
  subtitle: string;
  image?: string;
}

const ProfileInfoCard = (props: ProfileInfoCardProps) => {
  return (
    <div className="profile-info-card">
      <div className="profile-image-container">
        {Svgs.profilePictureCircle({ className: "profile-image-frame" })}
        <img src={props.image} alt="Profile image" className="profile-image" />
      </div>
      <div className="title-and-subtitle">
        <h3 className="medium">{props.title}</h3>
        <h6 className="regular">{props.subtitle}</h6>
      </div>
    </div>
  );
};
export default ProfileInfoCard;
