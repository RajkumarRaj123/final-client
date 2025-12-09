import React from "react";
import Slider from "react-slick";
import "./Slide.css";

const Slide = ({ children, slidesToShow = 3, arrowsScroll = 1 }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: arrowsScroll,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="slide">
      <div className="container carousel-initialized">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};

export default Slide;
