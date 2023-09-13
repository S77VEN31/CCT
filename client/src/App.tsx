// React
import { Route, Routes, BrowserRouter } from "react-router-dom";
// Styles
import "./App.css";
// Screens
import Login from "./screens/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
