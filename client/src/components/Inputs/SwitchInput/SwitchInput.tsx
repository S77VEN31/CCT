// React
import { useState } from "react";
// Components
import ReactSwitch from "react-switch";

interface SwitchInputProps {
  label?: string | null;
}

const SwitchInput = (props:SwitchInputProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="switch-input">
      <h6 className="switch-label semibold">{props.label}</h6>
      <ReactSwitch
        className="react-switch"
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={() => {
          handleChange();
        }}
        checked={checked}
        offColor="#40189d"
        onColor="#e9e0ff"
        onHandleColor="#40189d"
        height={20}
        width={50}
      />
    </div>
  );
};
export default SwitchInput;
