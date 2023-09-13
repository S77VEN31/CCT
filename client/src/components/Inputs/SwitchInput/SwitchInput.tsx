// React
import { useState } from "react";
// Components
import ReactSwitch from "react-switch";

const SwitchInput = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="switch-input">
      <ReactSwitch
        className="react-switch"
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={() => {
          handleChange();
        }}
        checked={checked}
      />
    </div>
  );
};
export default SwitchInput;
