import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
      <h1>{carItem.carName}</h1>
      <Link to="/bookingDetails" state={{ carItem: carItem }}>
        <button disabled={carItem.isBooked}>Book Now</button>
      </Link>
    </div>
  );
}

export default CarDetails;
