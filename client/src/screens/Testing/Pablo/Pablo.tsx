import "./Pablo.style.css";
import AsociationCard from "./components/asociationCard/AsociationCard";

import SwitchInput from "../../../components/Inputs/SwitchInput/SwitchInput";

function Pablo() {

  return(
    <div className="pablo-screen">
      <AsociationCard 
        name="ASODEC" 
        carrer="Ingeniería en Computación" 
        // image="Logo"
      />
      <SwitchInput label="test"/>
    </div>
  )  
}
export default Pablo;