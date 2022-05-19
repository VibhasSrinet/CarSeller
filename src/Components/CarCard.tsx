import React from "react";
import { Link } from "react-router-dom";
import "./Home/Home.css";
function CarCard(props: any) {
  return (
    <Link to={`/carDetail/${props.car.carId}`}>
      <div className="CarCard">
        <h5>{props.car.carName}</h5>
      </div>
    </Link>
  );
}

export default CarCard;
