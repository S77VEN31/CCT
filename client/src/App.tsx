import "./App.css";
import PieChartComponent from "./components/Graphs/PieChart/PieChart";
import Login from "./screens/Login";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];


function App() {
  return (
    <>
      <Login />
      <PieChartComponent data={data}/>
    </>
  );
}

export default App;
