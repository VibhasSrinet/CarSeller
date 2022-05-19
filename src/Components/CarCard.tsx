import React from "react";
import { Link } from "react-router-dom";
import "./Home/Home.css";
function CarCard(props: any) {
  return (
    <div className="CarCard">
      <h5>{props.car.carName}</h5>
    </div>
  );
}

export default CarCard;
