import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CarCard from "./CarCard";
function List(props: any) {
  const { searchText } = useParams();
  const [carList, setcarList] = useState(props.carList);
  useEffect(() => {
    setcarList(() => {
      let x = carList;
      if (searchText !== "all") {
        x = x.filter((carItem: any) =>
          carItem.carName.toLowerCase().includes(searchText?.toLowerCase())
        );
      }
      return x;
    });
  }, []);
  const getCarList = (carType: string) => {
    setcarList(() => {
      let x = props.carList;
      if (carType !== "all") {
        x = x.filter((carItem: any) => carItem.carType === carType);
      }
      if (searchText !== "all") {
        x = x.filter((carItem: any) =>
          carItem.carName.toLowerCase().includes(searchText?.toLowerCase())
        );
      }
      return x;
    });
  };
  return (
    <div className="List">
      <nav>
        <ul className="featured-headings">
          <li onClick={() => getCarList("all")}>View all</li>
          <li onClick={() => getCarList("Sedan")}>Sedan</li>
          <li onClick={() => getCarList("SUV")}>SUV</li>
          <li onClick={() => getCarList("Hatchback")}>Hatchback</li>
          <li onClick={() => getCarList("Coupe")}>Coupe</li>
        </ul>
      </nav>
      <div className="cards-group">
        {carList.map((car: any) => (
          <CarCard car={car} key={car.carId} />
        ))}
      </div>
    </div>
  );
}

export default List;
