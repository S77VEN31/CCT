// Styles
import "./NotificationButton.style.css";
// Components
import IconTextButton from "../IconTextButton/IconTextButton";
// Icons
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
interface NotificationButtonProps {
  notifications: number;
  handleClick?: () => void;
  icon?: IconDefinition;
}

const NotificationButton = (props: NotificationButtonProps) => {
  return (
    <div className="notification-button">
      {props.notifications > 0 && (
        <div className="notification-badge semibold">{props.notifications}</div>
      )}
      <IconTextButton
        handleOnClick={() => {
          props.handleClick;
        }}
        buttonClassname={"icon-text-button"}
        icon={props.icon}
      />
    </div>
  );
};
export default NotificationButton;
