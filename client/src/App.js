import React from "react";
import "./App.scss";
import Slide from "./Slide.jsx";
import Home from "./Home";
import Topdest from "./Topdest";
import Categories from "./Categories";
import Payment from "./Payment";
const App = () => {
  return (
    <div id="app">
      <Home />
      <Slide />
      <Topdest />
      <Payment />
    </div>
  );
};
export default App;
