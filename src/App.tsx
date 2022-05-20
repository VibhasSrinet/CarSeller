import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./header";
import Footer from "./foooter";
import Home from "./Components/Home/Home";
import List from "./Components/List";
import CarList from "./CarListData.json";
import CarDetails from "./Components/CarDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import BookingDetails from "./Components/BookingDetails";
import Success from "./Components/Success";
function App() {
  const navigate = useNavigate();
  const [carList, setCarList] = useState(CarList);
  const bookACar = (id: string) => {
    setCarList(() => {
      return carList.map((car) => {
        if (car.carId === id) {
          car.isBooked = true;
        }
        return car;
      });
    });
    navigate("/success");
  };
  return (
    <div className="App">
      <Header />

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
          path="bookingDetails"
          element={<BookingDetails onBook={bookACar} />}
        ></Route>
        <Route path="success" element={<Success />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
