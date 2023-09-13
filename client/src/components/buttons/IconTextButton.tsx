// Styles
import "./IconTextButton.style.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
// Globals
import { classes } from "../../globals/handleClassnames/classes";

interface IconTextButtonProps {
  buttonText?: string;
  buttonClassname?: string | null;
  icon?: IconDefinition;
  key?: number;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  handleOnClick?: () => void;
}

const IconTextButton = (props: IconTextButtonProps) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.handleOnClick}
      className={classes([
        "button",
        props.buttonClassname,
        props.disabled && "disabled",
      ])}
    >
      {props.icon && <FontAwesomeIcon className="icon" icon={props.icon} />}
      {props.buttonText}
    </button>
  );
};
export default IconTextButton;
