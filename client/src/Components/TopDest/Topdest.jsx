import React, { useEffect, useState } from "react";
import "./Topdest.scss";
import Card from "../TnCard/Card";
// import Data from "../TnCard/tncards.json";
import axios from "axios";
function Topdest() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:8000/api/v1/tours");
      setPlaces([...data]);
    };
    getData();
  }, []);
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
          {places?.map((data, index) => {
            return (
              <Card
                key={index}
                name={data["Place Name"]}
                desc={data.Description}
                loc={data.Location}
                image_url={data.Image}
                id={data._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Topdest;
