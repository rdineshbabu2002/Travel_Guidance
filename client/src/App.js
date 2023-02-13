import React from "react";
import "./App.scss";
import Slide from "./Slide.jsx";
import Home from "./Home";
import Topdest from "./Topdest";
import Categories from "./Categories";
const App = () => {
  return (
    <div id="app">
      <Home />
      <Slide />
      <Categories />
      <Topdest />
    </div>
  );
};
export default App;
