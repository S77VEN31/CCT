// React
import { useState } from "react";
// Styles
import "./TextInput.style.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
// Enumerables
import { Icons } from "../../../enumerables/icons/icons";

interface TextInputProps {
  type: string;
  id: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required: boolean;
  placeholder: string;
  icon?: IconDefinition;
}

const TextInput = (props: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
    const passwordInput = document.getElementById(props.id) as HTMLInputElement;
    if (showPassword) {
      passwordInput.type = "password";
    }
    if (!showPassword) {
      passwordInput.type = "text";
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={props.id}>
        <h6 className="medium">{props.name}</h6>
      </label>
      {props.type === "password" ? (
        <div className={"input-and-icon"}>
          <input className="medium" {...props} />
          <button type="button" onClick={togglePassword}>
            <FontAwesomeIcon
              icon={showPassword ? Icons.eyeSlash : Icons.eye}
              className="icon"
            />
          </button>
        </div>
      ) : (
        <div className="icon-and-input">
          {props.icon && <FontAwesomeIcon className="icon" icon={props.icon} />}
          <input className="medium" {...props} />
        </div>
      )}
    </div>
  );
};
export default TextInput;
