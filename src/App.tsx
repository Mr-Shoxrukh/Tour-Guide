import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import GalleryPage from "./Pages/Gallery";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import HappyClientsPage from "./Pages/HappyClients";
import ToursPage from "./Pages/Tours";

import UltimateServise from "./Pages/Home/Components/Ultimate Travel/ultimate servise";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<AboutPage />} />

      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="*" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<ContactPage />} />
      <Route path="/happy-clients" element={<HappyClientsPage />} />
      <Route path="*" element={<HappyClientsPage />} />
      <Route path="/tours" element={<ToursPage />} />
      <Route path="*" element={<ToursPage />} />
      <Route path="/ultimate-service/:tourId" element={<UltimateServise />} />
      <Route path="*" element={<UltimateServise />} />
    </Routes>
  );
}

export default App;
