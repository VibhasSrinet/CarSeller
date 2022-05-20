import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Home/Home.css";
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

  return (
    <div>
      <h2>{carItem.carName}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name.."
            {...register("name", {
              required: "Name is required!",
            })}
          />
          <p>{errors.name?.message}</p>
        </div>
        <div>
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
          <p>{errors.contactNumber?.message}</p>
        </div>
        <div>
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
          <p>{errors.city?.message}</p>
        </div>
        <div>
          <input
            type="checkbox"
            {...register("chooseCb", {
              required: "You must accept our terms and conditions!",
            })}
          />
          <label className="form-check-label">
            I accept the Terms and Conditions
          </label>
          <p>{errors.chooseCb?.message}</p>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default BookingDetails;
