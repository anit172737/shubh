import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../img/cleanMumbai/8.png";
import img2 from "../img/cleanMumbai/9.png";
import img3 from "../img/cleanMumbai/10.png";

const Slider = () => {
  return (
    <Carousel axis="horizontal" dynamicHeight="100%">
      <div>
        <img src={img1} alt="img1" />
      </div>
      <div>
        <img src={img2} alt="img2" />
      </div>
      <div>
        <img src={img3} alt="img3" />
      </div>
    </Carousel>
  );
};

export default Slider;
