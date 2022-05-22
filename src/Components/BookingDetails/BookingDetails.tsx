import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./BookingDetails.css";
import blackArrow from "../../asset/blackArrow.png";
import { useNavigate } from "react-router-dom";
function BookingDetails(props: any) {
  const { carItem }: any = useLocation().state;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data: any) => {
    setUserInfo(data);
    props.onBook(carItem.carId);
  };
  const navigate = useNavigate();
  return (
    <div className="BookingDetails">
      <div className="carInfo">
        <p style={{ fontSize: "1.6rem" }}>
          Car <b>Details</b>
        </p>
        <img className="carImage" src={require("../../asset/details1.png")} />
        <p style={{ fontSize: "1.6rem" }}>
          <b>{carItem.carName}</b>
        </p>

        <div className="carSpecification">
          <p>Fuel type</p>
          <h3>{carItem.fuelType}</h3>
        </div>
        <div className="carSpecification">
          <p>Engine</p>
          <h3>{carItem.engine}</h3>
        </div>
        <div onClick={() => navigate(-1)} className="viewdetails">
          <span>View all details</span>
          <img style={{ width: "1.6rem", height: "1rem" }} src={blackArrow} />
        </div>
      </div>
      <div className="booking-form">
        <p style={{ fontSize: "1.6rem", textAlign: "start" }}>
          Booking <b>Details</b>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-elements">
            <div className="input">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name.."
                {...register("name", {
                  required: "Name is required!",
                })}
              />
              <p className="error-message">{errors.name?.message}</p>
            </div>
            <div className="input">
              <label>Contact Number</label>
              <input
                type="text"
                placeholder="+918649736210..."
                {...register("contactNumber", {
                  required: "Contact Number is required!",
                  pattern: {
                    value: /^[+]91(9|8|7)\d{9}$/,
                    message: "Contact number must be Indian(+91) and valid!",
                  },
                })}
              />
              <p className="error-message">{errors.contactNumber?.message}</p>
            </div>
            <div className="input">
              <label>City</label>
              <select
                {...register("city", {
                  required: "City is required!",
                })}
              >
                <option value="" disabled selected hidden>
                  Choose a City
                </option>
                <option>New Delhi</option>
                <option>Mumbai</option>
                <option>Banglore</option>
                <option>Chennai</option>
                <option>Kolkata</option>
              </select>
              <p className="error-message">{errors.city?.message}</p>
            </div>
            <div className="terms">
              <div className="checkmark">
                <input
                  type="checkbox"
                  {...register("chooseCb", {
                    required: "You must accept our terms and conditions!",
                  })}
                />
                <label>I accept the Terms and Conditions</label>
              </div>
              <p className="error-message">{errors.chooseCb?.message}</p>
              <div className="termsDetails">
                <p>
                  <b>Terms and conditions:</b>
                </p>
                <p style={{ marginTop: "-1rem" }}>
                  *Terms and conditions apply. All offers are from dealers.
                  Please get in touch with your nearest dealer for detailed
                  terms and conditions. All taxes are additional. Offer valid
                  till February 15, 2022 and is subject to change without prior
                  notice. Calculations for the following are for a specific
                  tenure mileage and finance amount.{" "}
                </p>
              </div>
            </div>

            <button className="submitButton">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingDetails;
