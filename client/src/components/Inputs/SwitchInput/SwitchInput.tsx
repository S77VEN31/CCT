// React
import { useState } from "react";
// Components
import ReactSwitch from "react-switch";
const SwitchInput = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ReactSwitch
      className="react-switch"
      checkedIcon={false}
      uncheckedIcon={false}
      onChange={() => {
        setChecked(!checked);
      }}
      checked={checked}
    />
  );
};
export default SwitchInput;
