import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <div id="homescreen">
      <div className="navbar">
        <div className="heading">Tour Trekker </div>

        <ul class="navbarcontent">
          <li className="navcontent1">Home</li>
          <li className="navcontent">About Us</li>
        </ul>
      </div>
      <div className="home">
        <div className="container">
          <p className="ultimate">The ultimate travel guide</p>
          <h1 className="places">Explore Beautiful Places</h1>
        </div>
        <div className="tophead">
          <div className="location">
            <p>Location</p>
            <p>Where do you want to go ?</p>
          </div>
          <div className="date">
            <p>Date</p>
            <input type={"date"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
