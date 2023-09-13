// React
import { Route, Routes, BrowserRouter } from "react-router-dom";
// Styles
import "./App.css";
// Enumerables
import { RoutesList } from "./enumerables/routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesList.map(({ ...props }, key) => {
          return <Route key={key} {...props} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
