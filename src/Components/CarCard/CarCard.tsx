import React from "react";
import { Link } from "react-router-dom";
import "./CarCard.css";
import rightArrow from "../../asset/blackArrow.png";
function CarCard(props: any) {
  return (
    <Link to={`/carDetail/${props.car.carId}`}>
      <div className="CarCard"></div>
      <div className="card">
        <img src={require(`../../asset/${props.car.image}`)} />
        <div className="container">
          <h4>{props.car.carName}</h4>
          <div className="baserate">
            <p>{props.car.baseRate}</p>
            <div>
              <img src={rightArrow} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarCard;
