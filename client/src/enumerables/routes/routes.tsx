// Icons
import { Icons } from "../icons/icons";
// mainRoutes
import Login from "../../screens/MainScreens/Login/Login";
import Register from "../../screens/MainScreens/Register/Register";
// menuRoutes
import Profile from "../../screens/MenuScreens/Profile/Profile";
import Search from "../../screens/MenuScreens/Search/Search";
import Stats from "../../screens/MenuScreens/Stats/Stats";
import News from "../../screens/MenuScreens/News/News";
/* Testing Screens delete in production */
import Tomas from "../../screens/Testing/Tomas/Tomas";
import Pablo from "../../screens/Testing/Pablo/Pablo";
import Ariel from "../../screens/Testing/Ariel/Ariel";

export const RoutesList = {
  mainRoutes: [
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/tomas", element: <Tomas /> },
    { path: "/pablo", element: <Pablo /> },
    { path: "/ariel", element: <Ariel /> },
  ],
  menuRoutes: [
    {
      path: "/menu/profile",
      element: <Profile />,
      name: "Perfil",
      icon: Icons.user,
    },
    {
      path: "/menu/search",
      element: <Search />,
      name: "Buscar",
      icon: Icons.search,
    },
    {
      path: "/menu/stats",
      element: <Stats />,
      name: "Estadísticas",
      icon: Icons.stats,
    },
    {
      path: "/menu/news",
      element: <News />,
      name: "Noticias",
      icon: Icons.news,
    },
  ],
};
