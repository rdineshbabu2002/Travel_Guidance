import React from "react";
import "./App.scss";
import Slide from "./Slide.jsx";
import Home from "./Home";
import Topdest from "./Topdest";
import Payment from "./Payment";
import Footer from "./Footer";
const App = () => {
  return (
    <div id="app">
      <Home />
      <Slide />
      <Topdest />
      <Payment />
      <Footer />
    </div>
  );
};
export default App;
