//Styles
import "./Tomas.style.css";
//Components
import AsociationEventCount from "./components/AsociationEventCounter/AsociationEventCount";

function Tomas() {

  return (
    <div className="tomas-screen">
      <AsociationEventCount name="ASODEC" amount={5}/>
    </div>
  );
};

export default Tomas;
