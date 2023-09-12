// Styles
import "./TextInput.style.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
interface TextInputProps {
  type: string;
  id: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required: boolean;
  placeholder: string;
  icon?: JSX.Element;
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
      <label className="medium-subtitle" htmlFor={props.id}>
        {props.name}
      </label>

      <div
        className={`input-and-icon  ${
          props.type !== "password" && "icon-and-input"
        }`}
      >
        <input {...props} />
        <div className="show-password-button">
          {props.type === "password" ? (
            <button onClick={togglePassword}>
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="icon"
              />
            </button>
          ) : (
            props.icon && props.icon
          )}
        </div>
      </div>
    </div>
  );
};
export default TextInput;
