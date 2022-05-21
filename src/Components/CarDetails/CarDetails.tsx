import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./carDetails.css";
function CarDetails({ carList }: any) {
  const { id } = useParams();
  const [carItem, setCarItem] = useState({
    carName: "",
    isBooked: false,
  });
  useEffect(() => {
    const carItem = carList.find((car: any) => car.carId === id);
    setCarItem(carItem);
  }, []);
  return (
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
      <div className="details-content"></div>
      {/* <Link to="/bookingDetails" state={{ carItem: carItem }}>
        <button disabled={carItem.isBooked}>Book Now</button>
      </Link> */}
    </div>
  );
}

export default CarDetails;
