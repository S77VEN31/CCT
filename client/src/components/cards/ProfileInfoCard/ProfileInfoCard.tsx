// Styles
import "./ProfileInfoCard.style.css";
// Svgs
import { Svgs } from "../../../enumerables/svgs/svgs";

interface ProfileInfoCardProps {
  image?: string;
}

const ProfileInfoCard = (props: ProfileInfoCardProps) => {
  return (
    <div className="profileInfoCard">
      <div>
        {Svgs.profilePictureCircle({ className: "profile-image" })}
        <img src={props.image} alt="Profile image" className="profile-image" />
      </div>
    </div>
  );
};
export default ProfileInfoCard;
