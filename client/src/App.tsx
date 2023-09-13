import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./screens/Login";

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
