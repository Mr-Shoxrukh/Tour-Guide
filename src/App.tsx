import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import GalleryPage from "./Pages/Gallery";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import HappyClientsPage from "./Pages/HappyClients";
import ToursPage from "./Pages/Tours";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/happy-clients" element={<HappyClientsPage />} />
      <Route path="/tours" element={<ToursPage />} />
    </Routes>
  );
}

export default App;
