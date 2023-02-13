import React from "react";
import { useParams } from "react-router-dom";
import "./Detailed.scss";
const Detailed = () => {
  const { name } = useParams();
  console.log(name);
  return <div id="detailedinfo">Detailed</div>;
};

export default Detailed;
