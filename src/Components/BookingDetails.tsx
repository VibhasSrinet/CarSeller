import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home/Home.css";
function BookingDetails(props: any) {
  const { carItem }: any = useLocation().state;

  return (
    <div>
      <h2>{carItem.carName}</h2>

      <input />

      <button
        disabled={carItem.isBooked}
        onClick={() => props.onBook(carItem.carId)}
      >
        Submit
      </button>
    </div>
  );
}

export default BookingDetails;
