import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Slide from "./Components/Slide/Slide";
import About from "./Pages/About/About";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About></About>} />
      <Route path="/card" element={<Slide></Slide>} />
    </Routes>
  );
};

export default AllRoutes;
