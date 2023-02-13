import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detailed.scss";
import Navbar from "../../Components/Navbar/Navbar";
import img from "../../assests/Lotus.jpg";
import SimpleMap from "../../Components/SimpleMap/SimpleMap";
import Hotels from "../../Components/Hotelscard/Hotels";
const Detailed = () => {
  const { id } = useParams();
  const [place, setplace] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/place/${id}`
      );
      setplace(data);
    };
    getData();
  }, []);
  console.log(place);
  if (place == null) return <p>Loading....</p>;
  console.log(place);

  return (
    <div id="detailedinfo">
      <Navbar />
      <div className="detail">
        <h1 className="titlehead">{place["Place Name"]}</h1>
        <img className="imgdetail" src={img} alt="img" />
        <p className="description">{place.Description}</p>
        <h1 className="titlehead"> G-Map Location</h1>
        <SimpleMap />
        <h1 className="titlehead">Hotels Nearby </h1>
        <div className="hotellist">
          {place["Hotels near the Place"].map((hotel) => {
            return (
              <Hotels
                name={hotel["Hotel Name"]}
                distance={hotel["Distance to Place"]}
                rating={5}
              />
            );
          })}
        </div>
        <h1 className="titlehead" style={{ paddingBottom: "32px" }}>
          For Taxi and More Assistance Upgrade to Premium ❤️‍🔥➡️
        </h1>
      </div>
    </div>
  );
};

export default Detailed;
