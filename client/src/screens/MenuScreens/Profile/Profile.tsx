// Style
import "./Profile.style.css";
// Icons
import { Icons } from "../../../enumerables/icons/icons";
// Components
import TotalsDataCard from "../../../components/cards/TotalsDataCard/TotalsDataCard";
import EventCard from "../../../components/cards/EventCard/EventCard";
import ProfileInfoCard from "../../../components/cards/ProfileInfoCard/ProfileInfoCard";

const TotalsDataCardData = [
  {
    title: "Nombre",
    data: 3123131, // Fetch from API
    icon: Icons.calendar,
    className: "card-1",
  },
  {
    title: "Apellido",
    data: 312313, // Fetch from API
    icon: Icons.briefcase,
    className: "card-2",
  },
  {
    title: "Email",
    data: 41231, // Fetch from API
    icon: Icons.user,
    className: "card-3",
  },
  {
    title: "Email",
    data: 41231, // Fetch from API
    icon: Icons.email,
    className: "card-4",
  },
];
const EventCardData = [
  {
    organizer: "Organizador",
    title: "Titulo",
    date: "Fecha",
    buttonText: "Editar",
    image: "https://picsum.photos/200/300",
    description: "Descripcion",
    location: "Ubicacion",
  },
  {
    organizer: "Organizador",
    title: "Titulo",
    date: "Fecha",
    buttonText: "Editar",
    description: "Descripcion",
    location: "Ubicacion",
  },
  {
    organizer: "Organizador",
    title: "Titulo",
    date: "Fecha",
    buttonText: "Editar",
    image: "https://picsum.photos/200/300",
    description: "Descripcion",
    location: "Ubicacion",
  },
  {
    organizer: "Organizador",
    title: "Titulo",
    date: "Fecha",
    buttonText: "Editar",
    description: "Descripcion",
    location: "Ubicacion",
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
      <div className="event-cards-container">
        {EventCardData.map(({ ...props }, key) => {
          return <EventCard key={key} {...props} />;
        })}
      </div>
      <ProfileInfoCard />
    </div>
  );
};
export default Profile;
