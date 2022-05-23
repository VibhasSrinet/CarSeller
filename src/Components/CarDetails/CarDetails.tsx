import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./carDetails.css";
function CarDetails({ carList }: any) {
  // getting id passed in route
  const { id } = useParams();
  // maintaining a state of a car
  const [carItem, setCarItem] = useState({
    carName: "",
    isBooked: false,
    fuelType: "",
    engine: "",
    torque: "",
    acceleration: "",
    topSpeed: "",
    variants: "",
    exteriors: "",
    interiorFinishes: [],
    cost: "",
  });
  //getting car from the id received
  useEffect(() => {
    const carItem = carList.find((car: any) => car.carId === id);
    setCarItem(carItem);
  }, []);
  return (
    // displaying the details as per the car value received from id
    <div className="CarDetails">
      <div className="details-images">
        <p className="carName">{carItem.carName}</p>
        <img
          className="detailed-view"
          src={require("../../asset/details2.png")}
          alt=""
        />
        <img
          className="detailed-view"
          src={require("../../asset/details1.png")}
          alt=""
        />
        <img
          className="backseat"
          src={require("../../asset/Interior Finish img 1.png")}
          alt=""
        />
        <img
          className="backseat"
          src={require("../../asset/Interior Finish img 2.png")}
          alt=""
        />
      </div>
      <div className="details-content">
        <p style={{ fontSize: "1.6rem" }}>
          Car <b>Specifications</b>
        </p>
        <div className="specification-group1 ">
          <div className="carSpecification">
            <p>Fuel type</p>
            <h3>{carItem.fuelType}</h3>
          </div>
          <div className="carSpecification">
            <p>Engine</p>
            <h3>{carItem.engine}</h3>
          </div>
          <div className="carSpecification">
            <p>Torque</p>
            <h3>{carItem.torque}</h3>
          </div>
          <div className="carSpecification">
            <p>Acceleration</p>
            <h3>{carItem.acceleration}</h3>
          </div>
          <div className="carSpecification">
            <p>Top Speed</p>
            <h3>{carItem.topSpeed}</h3>
          </div>
          <div className="carSpecification">
            <p>Variants</p>
            <h3>
              The
              {" " + carItem.carName}
              {carItem.variants}
            </h3>
          </div>
        </div>
        <div className="exterior-specification">
          <p>Exteriors</p>
          <div className="exterior-color"></div>
          <div className="carSpecification">
            <p>Exteriors</p>
            <h3>{carItem.exteriors}</h3>
          </div>
        </div>
        <div className="interior-specification">
          <p>Interior finishes</p>
          <div className="interior-color"></div>
          <ul>
            {carItem.interiorFinishes.map((interiorFinish) => (
              <li key={interiorFinish}>{interiorFinish}</li>
            ))}
          </ul>
        </div>
        <div className="cost">
          <h4>
            <b style={{ marginRight: "3rem" }}>Cost</b>
            <b>{carItem.cost}</b>
          </h4>
        </div>
        {/*Book button only active when car is not previously booked*/}
        <Link to={`/bookingDetails/${id}`} state={{ carItem: carItem }}>
          <button className="bookButton" disabled={carItem.isBooked}>
            BOOK NOW
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CarDetails;
