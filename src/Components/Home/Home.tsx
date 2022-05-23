import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import CarCard from "../CarCard/CarCard";
import leftArrow from "../../asset/Icon.png";
import rightArrow from "../../asset/right.png";
import blackArrow from "../../asset/blackArrow.png";

function Home(props: any) {
  // class for each category nav
  const classArray = ["sedan", "suv", "hatchback", "coupe"];
  // using index for hero Image
  const [index, setIndex] = useState(0);
  // classes for hero section
  const [classes, setClasses] = useState("herosection sedan");
  // classes for featured navbar
  const [classPopular, setClassPopular] = useState("category active");
  const [classJust, setClassJust] = useState("category");
  const [classUpcoming, setClassUpcoming] = useState("category");
  // a list as a state as per featured tab selected
  const [featuredList, setfeaturedList] = useState(props.carList);
  // a state to maintain what searched in search bar
  const [searchText, setSearchText] = useState("");
  const [classSedan, setSedan] = useState("activated");
  const [classSUV, setSUV] = useState("");
  const [classHatchback, setHatchback] = useState("");
  const [classCoupe, setCoupe] = useState("");

  // a function to reset all classes to empty
  const reset = () => {
    setCoupe("");
    setHatchback("");
    setSUV("");
    setSedan("");
  };

  // a function to activate nav and change hero image
  const setActivation = (carType: string) => {
    reset();
    if (carType === "Sedan") {
      setSedan("activated");
      setIndex(0);
      setClasses("herosection sedan");
    } else if (carType === "SUV") {
      setSUV("activated");
      setIndex(1);
      setClasses("herosection suv");
    } else if (carType === "Hatchback") {
      setHatchback("activated");
      setIndex(2);
      setClasses("herosection hatchback");
    } else if (carType === "Coupe") {
      setCoupe("activated");
      setIndex(3);
      setClasses("herosection coupe");
    }
  };
  useEffect(() => {
    setfeaturedList((featuredList: any) => {
      return featuredList.filter((item: any) => item.isBooked);
    });
  }, []);

  // a function to change hero image on arrow click
  const changeBKG = (y: number) => {
    reset();
    let newClasses = "herosection ";
    setIndex((index + y + 4) % 4);
    newClasses += classArray[(index + y + 4) % 4];
    setClasses(newClasses);
    switch ((index + y + 4) % 4) {
      case 0:
        setSedan("activated");
        break;
      case 1:
        setSUV("activated");
        break;
      case 2:
        setHatchback("activated");
        break;
      case 3:
        setCoupe("activated");
    }
  };

  // a function to set list state based on just launched
  const listofJustLaunched = () => {
    setClassJust("category active");
    setClassPopular("category");
    setClassUpcoming("category");
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

  // a function to set search state on change in input
  const handleChange = (e: any) => {
    setSearchText(e.target.value);
  };

  // a function to set list state based on popular
  const listofPopular = () => {
    setClassJust("category");
    setClassPopular("category active");
    setClassUpcoming("category");
    setfeaturedList(() => {
      return props.carList.filter((item: any) => item.isBooked);
    });
  };

  // a function to set list state based on upcoming cars
  const listofUpcoming = () => {
    setClassJust("category");
    setClassPopular("category");
    setClassUpcoming("category active");
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
      {/* top category nav bar */}
      <div className="topnav">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActivation("Sedan")}
          className={classSedan}
        >
          SEDAN
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActivation("SUV")}
          className={classSUV}
        >
          SUV
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActivation("Hatchback")}
          className={classHatchback}
        >
          Hatchback
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setActivation("Coupe")}
          className={classCoupe}
        >
          Coupe
        </div>
      </div>
      {/* hero section with image change on arrow icons */}
      <div className="homeSection">
        <div className={classes}>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="content">
                <div className="arrowIcon ">
                  <img onClick={() => changeBKG(-1)} src={leftArrow} />
                </div>
                <div className="central-content">
                  <div className="banner-content">
                    <h1>Find Parts Of Your Vehicle</h1>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Enter car name..."
                      value={searchText}
                      onChange={handleChange}
                      className="form-control"
                    />
                    <Link to={`/list/${searchText}`}>
                      <button className="btn">SEARCH</button>
                    </Link>
                  </div>
                </div>
                <div className="arrowIcon">
                  <img onClick={() => changeBKG(1)} src={rightArrow} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featured">
        <p className="heading">
          Featured <b>Cars</b>
        </p>
        {/* featured nav bar */}
        <nav>
          <div className="featured-headings">
            <div className={classPopular} onClick={listofPopular}>
              <span>Popular</span>
            </div>
            <div className={classJust} onClick={listofJustLaunched}>
              <span>Just Launched</span>
            </div>
            <div className={classUpcoming} onClick={listofUpcoming}>
              <span>Upcoming</span>
            </div>
          </div>
          <div className="viewall">
            <Link to="/list/all">
              <span>View all</span>
              <img src={blackArrow} />
            </Link>
          </div>
        </nav>
        {/* list of cars as per featured tab selected */}
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
