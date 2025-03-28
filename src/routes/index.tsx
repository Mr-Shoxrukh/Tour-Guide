import AboutPage from "../Pages/About";
import GalleryPage from "../Pages/Gallery";
import HappyClientsPage from "../Pages/HappyClients";
import Home from "../Pages/Home";

export interface IRoute {
  path: string;
  component: JSX.Element | JSX.Element[];
}

export const PUBLIC_ROUTES: IRoute[] = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <AboutPage />,
  },
  {
    path: "/gallery",
    component: <GalleryPage />,
  },
  {
    path: "/happy-clients",
    component: <HappyClientsPage />,
  },
];
