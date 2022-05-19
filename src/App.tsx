import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./header";
import Footer from "./foooter";
import Home from "./Components/Home/Home";
import List from "./Components/List";
import CarList from "./CarListData.json";
import CarDetails from "./Components/CarDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [carList, setCarList] = useState(CarList);
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home carList={carList} />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/carDetail" element={<CarDetails />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
