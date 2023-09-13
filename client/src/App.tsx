// React
import { Route, Routes, BrowserRouter } from "react-router-dom";
// Styles
import "./App.css";
// Screens
import Login from "./screens/Login/Login";
// TestScreens
import Tomas from "./screens/Testing/Tomas/Tomas";
import Pablo from "./screens/Testing/Pablo/Pablo";
import Ariel from "./screens/Testing/Ariel/Ariel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tomas" element={<Tomas />} />
        <Route path="/pablo" element={<Pablo />} />
        <Route path="/ariel" element={<Ariel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
