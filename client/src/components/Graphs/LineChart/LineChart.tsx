// Styles
import "./LineChart.style.css";
// Recharts for graphs
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
// define props
interface LineChartProps {
    lineNames: string[];
    pages: {
        name: string;
        values: {
            name: string;
            value: number;
        }[];
    }[];
    colors: string[];
}

const LineChartComponent = (props: LineChartProps) => {
    const destructuredPages = props.pages.map((page) => {
        return {
            name: page.name,
            ...page.values.reduce((acc, curr) => {
                return { ...acc, [curr.name]: curr.value };
            }, {}),
        };
    });
    return (
        <LineChart width={600} height={400} data={destructuredPages} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {props.lineNames.map((lineName, index) => (
                <Line
                    key={index}
                    type="monotone"
                    dataKey={lineName}
                    stroke={props.colors[index % props.colors.length]}
                    strokeWidth={3}
                    activeDot={{ r: 6 }}
                />
            ))}

        </LineChart>
    );
}

export default LineChartComponent;