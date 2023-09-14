// Style
import "./Profile.style.css";
// Components
import TotalsDataCard from "../../../components/cards/TotalsDataCard/TotalsDataCard";
import { Icons } from "../../../enumerables/icons/icons";

const TotalsDataCardData = [
  {
    title: "Nombre",
    data: 3123131,
    icon: Icons.user,
    className: "card-1",
  },
  {
    title: "Apellido",
    data: 312313,
    icon: Icons.user,
    className: "card-2",
  },
  {
    title: "Email",
    data: 41231,
    icon: Icons.user,
    className: "card-3",
  },
  {
    title: "Email",
    data: 41231,
    icon: Icons.user,
    className: "card-4",
  },
];

const Profile = () => {
  return (
    <div className="profile-screen">
      <div className="total-cards-container">
        {TotalsDataCardData.map(({ ...props }, key) => {
          return <TotalsDataCard key={key} {...props} />;
        })}
      </div>
    </div>
  );
};
export default Profile;
