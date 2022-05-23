import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/foooter";
import Home from "./Components/Home/Home";
import List from "./Components/List";
import CarList from "./CarListData.json";
import CarDetails from "./Components/CarDetails/CarDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import BookingDetails from "./Components/BookingDetails/BookingDetails";
import Success from "./Components/Success/Success";
function App() {
  const navigate = useNavigate();
  //A state carList at App which would be passed to all child components
  const [carList, setCarList] = useState(CarList);
  // A function to book a car , taking carId as parameter
  const bookACar = (id: string) => {
    setCarList(() => {
      return carList.map((car) => {
        if (car.carId === id) {
          car.isBooked = true;
        }
        return car;
      });
    });
    // after booking navigate to success page
    navigate("/success");
  };
  return (
    <div className="App">
      <Header />
      {/* Adding routes*/}
      <Routes>
        <Route path="/" element={<Home carList={carList} />}></Route>
        <Route
          path="/list/:searchText"
          element={<List carList={carList} />}
        ></Route>
        <Route
          path="/carDetail/:id"
          element={<CarDetails carList={carList} />}
        ></Route>
        <Route
          path="/bookingDetails/:id"
          element={<BookingDetails carList={carList} onBook={bookACar} />}
        ></Route>
        <Route path="success" element={<Success />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
