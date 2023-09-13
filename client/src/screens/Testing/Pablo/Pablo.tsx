import "./Pablo.style.css";
import AsociationCard from "./components/asociationCard/AsociationCard";
function Pablo() {
  return(
    <div className="pablo-screen">
      <AsociationCard 
        name="ASODEC" 
        carrer="Ingeniería en Computación" 
        photo="Logo"
      />
    </div>
  )  
}
export default Pablo;