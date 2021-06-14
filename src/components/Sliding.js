import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Sliding() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="sliderimage">
          <img src="/sliders/slide1.png" alt="" />
        </div>
        <div className="sliderimage">
          <img src="/sliders/1.png" alt="" />
        </div>
        <div className="sliderimage">
          <img src="/sliders/3.jpg" alt="" />
        </div>
      </Slider>
    </>
  );
}
