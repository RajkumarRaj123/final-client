import { Swiper } from "swiper/react";
import "./Slide.css";

export const Slide = ({ children }) => {
  // const settings = {
  //   slidesToShow: slidesToShow || 3,
  //   slidesToScroll: arrowsScroll || 1,
  //   infinite: true,
  //   arrows: true,
  // }
  return (
    <div>
      <div>
        <Swiper>{children}</Swiper>
      </div>
    </div>
  );
};
