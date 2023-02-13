import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Locations from "./Pages/Locations/Locations";
import Detailed from "./Pages/Detailed/Detailed";
import Payment from "./Components/Payment/Payment";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations/:name" element={<Locations />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/Detailed/:id" element={<Detailed />} />
    </Routes>
  );
};

export default AllRoutes;
