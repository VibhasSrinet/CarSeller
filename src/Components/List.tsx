import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CarCard from "./CarCard/CarCard";
function List(props: any) {
  // creating classes for category tabs
  const [classViewAll, setViewAll] = useState("category active");
  const [classSedan, setSedan] = useState("category");
  const [classSUV, setSUV] = useState("category");
  const [classHatchback, setHatchback] = useState("category");
  const [classCoupe, setCoupe] = useState("category");
  // receiving the searched word via route
  const { searchText } = useParams();
  // maintaing a state of carList
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

  // a function to reset classes of nav
  const reset = () => {
    setCoupe("category");
    setHatchback("category");
    setSUV("category");
    setSedan("category");
    setViewAll("category");
  };

  // a function to change carList as per the category tab selected
  const getCarList = (carType: string) => {
    reset();
    if (carType === "all") {
      setViewAll("category active");
    } else if (carType === "Sedan") {
      setSedan("category active");
    } else if (carType === "SUV") {
      setSUV("category active");
    } else if (carType === "Hatchback") {
      setHatchback("category active");
    } else if (carType === "Coupe") {
      setCoupe("category active");
    }
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
      {/* a category nav to set list as per the type selected*/}
      <nav>
        <div className="featured-headings">
          <div className={classViewAll} onClick={() => getCarList("all")}>
            <span>View all</span>
          </div>
          <div className={classSedan} onClick={() => getCarList("Sedan")}>
            <span>Sedan</span>
          </div>
          <div className={classSUV} onClick={() => getCarList("SUV")}>
            <span>SUV</span>
          </div>
          <div
            className={classHatchback}
            onClick={() => getCarList("Hatchback")}
          >
            <span>Hatchback</span>
          </div>
          <div className={classCoupe} onClick={() => getCarList("Coupe")}>
            <span>Coupe</span>
          </div>
        </div>
      </nav>
      <div style={{ margin: "2rem 0 0 2rem" }}>
        <h3>{carList.length} total results</h3>
      </div>
      {/* display list selected here*/}
      <div className="cards-group">
        {carList.map((car: any) => (
          <CarCard car={car} key={car.carId} />
        ))}
      </div>
      <div className="pagination">
        <button>
          <span>{"<"}</span>
        </button>
        <button>
          <span>{">"}</span>
        </button>
      </div>
    </div>
  );
}

export default List;
