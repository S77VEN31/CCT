// Styles
import "./NotificationButton.style.css";
// Components
import IconTextButton from "../IconTextButton/IconTextButton";
// Icons
import { Icons } from "../../../enumerables/icons/icons";

const NotificationButton = () => {
  return (
    <div className="notification-button">
      <div className="notification-badge semibold">23</div>
      <IconTextButton buttonClassname={"icon-text-button"} icon={Icons.email} />
    </div>
  );
};
export default NotificationButton;
