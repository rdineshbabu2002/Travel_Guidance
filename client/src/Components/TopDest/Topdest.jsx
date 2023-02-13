import React from "react";
import "./Topdest.scss";
import Card from "../TnCard/Card";
import Data from "../TnCard/tncards.json";
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
                name={data.place_name}
                desc={data.description}
                loc={data.location}
                image_url={data.image_url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Topdest;
