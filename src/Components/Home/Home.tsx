import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import CarCard from "../CarCard";
function Home(props: any) {
  const [featuredList, setfeaturedList] = useState(props.carList);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    setfeaturedList((featuredList: any) => {
      return featuredList.filter((item: any) => item.isBooked);
    });
  }, []);
  const listofJustLaunched = () => {
    setfeaturedList(() => {
      return props.carList.filter((item: any) => {
        const d1 = new Date();
        const d2 = new Date(item.launchDate);
        var difference = d1.getTime() - d2.getTime();
        var dayDifference = difference / (1000 * 60 * 60 * 24);
        return dayDifference <= 30 && dayDifference >= 0;
      });
    });
  };
  const handleCahnge = (e: any) => {
    setSearchText(e.target.value);
  };

  const listofPopular = () => {
    setfeaturedList(() => {
      return props.carList.filter((item: any) => item.isBooked);
    });
  };

  const listofUpcoming = () => {
    setfeaturedList(() => {
      return props.carList.filter((item: any) => {
        const d1 = new Date();
        const d2 = new Date(item.launchDate);
        var difference = d1.getTime() - d2.getTime();
        var dayDifference = difference / (1000 * 60 * 60 * 24);
        return dayDifference < 0;
      });
    });
  };
  return (
    <div className="Home">
      <input type="text" value={searchText} onChange={handleCahnge} />
      <Link to={`/list/${searchText}`}>
        <button>Press</button>
      </Link>
      <div>
        <nav>
          <ul className="featured-headings">
            <li onClick={listofPopular}>Popular</li>
            <li onClick={listofJustLaunched}>Just Launched</li>
            <li onClick={listofUpcoming}>Upcoming</li>
            <li>
              <Link to="/list/all">View all</Link>
            </li>
          </ul>
        </nav>
        <div className="cards-group">
          {featuredList.map((car: any) => (
            <CarCard car={car} key={car.carId} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
