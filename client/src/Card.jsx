import React from "react";
import img from "./assests/maps-pin-black-icon.png";
function Card(props) {
  return (
    <div className="cardholder">
      <div class="bg-img">
        <img src={props.image_url} alt="img"></img>
      </div>
      <p className="place">{props.name}</p>
      <p className="description">{props.desc}</p>
      <p className="location">
        <img src={img} alt="t"></img> {props.loc}
      </p>
    </div>
  );
}
export default Card;
