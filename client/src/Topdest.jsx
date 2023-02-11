import React from "react";
import "./Topdest.scss";
import Card from "./Card";
import Data from "./carddata.json";
function Topdest() {
  return (
    <div>
      <h1 className="head">Top Destinations For You</h1>
      <p className="para">
        {" "}
        Much places suits your mood.Explore somewhere interesting
        <br /> and enjoy the vibes!
      </p>
      <div className="card-container-1">
        <div className="cards">
          {Data.map((data, index) => {
            return (
              <Card
                key={index}
                name={data["Place Name"]}
                desc={data.Description}
                loc={data.Location}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Topdest;
