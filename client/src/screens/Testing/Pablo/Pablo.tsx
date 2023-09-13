import "./Pablo.style.css";
import AsociationCard from "./components/asociationCard/asociationCard";
function Pablo() {
  return(
    <div className="screen">
      <AsociationCard 
        name="ASODEC" 
        carrer="Ingeniería en Computación" 
        photo="https://i.imgur.com/4Q2qX3N.png"/>
    </div>
  )  
}
export default Pablo;