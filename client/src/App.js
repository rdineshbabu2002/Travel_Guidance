import React from "react";
import "./App.scss";
import Slide from "./Slide.jsx";
import Home from "./Home";
import Topdest from "./Topdest";
const App = () => {
  return (
    <div id="app">
      <Home />
      <Slide />
      <Topdest />
    </div>
  );
};
export default App;
