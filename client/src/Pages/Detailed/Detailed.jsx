import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detailed.scss";
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
  if (place == null) return <p>Loading....</p>;
  console.log(place);

  return <div id="detailedinfo">fggfgf</div>;
};

export default Detailed;
