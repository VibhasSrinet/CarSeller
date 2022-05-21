import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import CarCard from "../CarCard/CarCard";
import leftArrow from "../../asset/Icon.png";
import rightArrow from "../../asset/right.png";
import blackArrow from "../../asset/blackArrow.png";

function Home(props: any) {
  const classArray = ["sedan", "suv", "hatchback", "coupe"];
  const [index, setIndex] = useState(0);
  const [classes, setClasses] = useState("herosection sedan");
  const [classPopular, setClassPopular] = useState("category active");
  const [classJust, setClassJust] = useState("category");
  const [classUpcoming, setClassUpcoming] = useState("category");
  const [featuredList, setfeaturedList] = useState(props.carList);
  const [searchText, setSearchText] = useState("");
  const [classSedan, setSedan] = useState("activated");
  const [classSUV, setSUV] = useState("");
  const [classHatchback, setHatchback] = useState("");
  const [classCoupe, setCoupe] = useState("");
  const reset = () => {
    setCoupe("");
    setHatchback("");
    setSUV("");
    setSedan("");
  };

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
  const handleChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const listofPopular = () => {
    setClassJust("category");
    setClassPopular("category active");
    setClassUpcoming("category");
    setfeaturedList(() => {
      return props.carList.filter((item: any) => item.isBooked);
    });
  };

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
      <div className="topnav">
        <div onClick={() => setActivation("Sedan")} className={classSedan}>
          SEDAN
        </div>
        <div onClick={() => setActivation("SUV")} className={classSUV}>
          SUV
        </div>
        <div
          onClick={() => setActivation("Hatchback")}
          className={classHatchback}
        >
          Hatchback
        </div>
        <div onClick={() => setActivation("Coupe")} className={classCoupe}>
          Coupe
        </div>
      </div>
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
