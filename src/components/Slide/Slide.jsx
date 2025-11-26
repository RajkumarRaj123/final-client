import { Slider } from "infinite-react-carousel";
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
