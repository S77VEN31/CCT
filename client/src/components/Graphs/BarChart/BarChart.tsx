// Styles
import "./BarChart.style.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
// define props
interface BarChartProps {
    barNames: string[];
    pages: {
        name: string;
        values: {
            name: string;
            value: number;
        }[];
    }[];
    colors: string[];
}

// in this prop, pages are individual columns that contain one or more bars
// each bar has a name and a value
// name has to be in barNames for it to be displayed

const BarChartComponent = (props: BarChartProps) => {
    const destructuredPages = props.pages.map((page) => {
        return {
            name: page.name,
            ...page.values.reduce((acc, curr) => {
                return { ...acc, [curr.name]: curr.value };
            }, {}),
        };
    });
    return (
        <BarChart width={600} height={400} data={destructuredPages} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {props.barNames.map((barName, index) => (
                <Bar
                    key={index}
                    dataKey={barName}
                    fill={props.colors[index % props.colors.length]}
                />
            ))}
            <Legend />
        </BarChart>
    );
}

export default BarChartComponent;