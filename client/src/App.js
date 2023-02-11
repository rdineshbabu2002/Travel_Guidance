import React from "react";
import "./App.scss";
import Categories from "./Categories";
import Home from "./Home";
import Topdest from "./Topdest";

const App = () => {
  return (
    <div id="app">
      <Home />
      <Categories />
      <Topdest />
    </div>
  );
};
export default App;
