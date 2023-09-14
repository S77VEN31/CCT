//Styles
import './AsociationEventCount.style.css'
//Svgs
import { Svgs } from "../../../../../enumerables/svgs/svgs";

interface AsociationEventCountProps {
    name?: string | null;
    amount?: number | null;
  }

const AsociationEventCount = (props:AsociationEventCountProps) => {
  return (
    <div className="asociation-event-count">
        <div className="photo-container">{Svgs.photo({})}</div>
        <div className="asociation-info">
            <div className="asoc-name">
                <h6 className="title semibold">{props.name}</h6>
            </div>
            <div className="subtitle-container">
                <h6 className="subtitle medium">{props.amount} eventos activos</h6>
            </div>
        </div>
    </div>
  )
}
export default AsociationEventCount;
