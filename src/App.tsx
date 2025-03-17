import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import GalleryPage from "./Pages/Gallery";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import HappyClientsPage from "./Pages/HappyClients";
import ToursPage from "./Pages/Tours";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/booking/:guideId" element={<Booking />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/happy-clients" element={<HappyClientsPage />} />
      <Route path="/tours" element={<ToursPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/log-in" element={<LogIn />} />
    </Routes>
  );
}

export default App;
