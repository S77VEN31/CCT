// React
import { Route, Routes, BrowserRouter } from "react-router-dom";
// Styles
import "./App.css";
// Screens
import Menu from "./screens/MainScreens/Menu/Menu";
// Enumerables
import { RoutesList } from "./enumerables/routes/routes";

function App() {
  const { mainRoutes, menuRoutes } = RoutesList;
  return (
    <BrowserRouter>
      <Routes>
        {mainRoutes.map(({ ...props }, key) => {
          return <Route key={key} {...props} />;
        })}
        <Route path="/menu" element={<Menu />}>
          {menuRoutes.map(({ ...props }, key) => {
            return <Route key={key} {...props} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
