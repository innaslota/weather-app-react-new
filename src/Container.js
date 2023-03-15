import "./Container.css";
import React from "react";
import CurrentLocation from "./CurrentLocation";
import Header from "./Header";
import Search from "./Search";
import Row from "./Row";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function () {
  return (
    <div className="Container">
      <Search />
      <CurrentLocation />
      <Header />
      <Row />
      <WeatherForecast />
      <Footer />
    </div>
  );
}
