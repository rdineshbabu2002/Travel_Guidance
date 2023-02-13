import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Locations from "./Pages/Locations/Locations";
import Detailed from "./Pages/Detailed/Detailed";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations/:name" element={<Locations />} />

      <Route path="/Detailed/:id" element={<Detailed />} />
    </Routes>
  );
};

export default AllRoutes;
