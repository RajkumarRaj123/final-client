import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slide.css";

export const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  const settings = {
    slidesToShow: slidesToShow || 3,
    slidesToScroll: arrowsScroll || 1,
    infinite: true,
    arrows: true,
  };
  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};
