import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Slide from "./Components/Slide/Slide";
import About from "./Pages/About/About";
import Locations from './Pages/Locations/Locations'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations/:name" element={<Locations />} />
    </Routes>
  );
};

export default AllRoutes;
