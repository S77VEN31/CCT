import Login from "../../screens/Login/Login";
import Register from "../../screens/Register/Register";
/* Testing Screens delete in production */
import Tomas from "../../screens/Testing/Tomas/Tomas";
import Pablo from "../../screens/Testing/Pablo/Pablo";
import Ariel from "../../screens/Testing/Ariel/Ariel";

export const RoutesList = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/tomas", element: <Tomas /> },
  { path: "/pablo", element: <Pablo /> },
  { path: "/ariel", element: <Ariel /> },
];
