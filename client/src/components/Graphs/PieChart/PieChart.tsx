// Styles
import "./PieChart.style.css";
// Recharts for graphs
import { PieChart, Pie, Cell } from "recharts";

// define props
interface PieChartProps {
    data: {
        name: string;
        value: number;
    }[];
}

function PieChartComponent(props: PieChartProps) {
    return (
        <PieChart width={400} height={400}>
            <Pie
                data={props.data}
                cx={200}
                cy={200}
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                label={(entry) => entry.name + ": " + entry.value}
                dataKey="value"
            >
                {props.data.map((_, index) => (
                    <Cell key={`cell-${index}`} />
                ))}
            </Pie>
        </PieChart>
    );
}

export default PieChartComponent;