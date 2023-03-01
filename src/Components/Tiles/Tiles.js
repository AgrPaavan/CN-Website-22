// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel as ReactCarousel } from "react-responsive-carousel";
import {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

import "swiper/css";
import "swiper/css/autoplay";


import image1 from "./assets/CodeKaze 1.svg";
import image2 from "./assets/shuriken wars 1.svg";
import image3 from "./assets/Img1.svg";
import image4 from "./assets/Img2.svg";
import image5 from "./assets/Img3.svg";





const slides = [image1, image2,image3,image4,image5];

export const Tiles = () => {
  return (
    <Swiper modules={[Autoplay]} spaceBetween={10} slidesPerView={3} loop={true} autoplay={{
      delay: 1000,
      disableOnInteraction: false,
  }}>
      {slides.map((slide) => (
        <SwiperSlide>
          <img src={slide} className="imgMain" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};