import React from "react";
import style from "./Events.module.css";
import Carousel from "react-multi-carousel";
import codekaze from "../Landing/assets/CodeKaze 1.svg";
import appdev from "../Landing/assets/intro to appdev 1.svg";
import shuriken from "../Landing/assets/shuriken wars 1.svg";
import { motion } from "framer-motion";

export const Events = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className={`mt-20 mb-20 text-center ${style.heading}`}>
        <div className={`pt-20 text-[40px] font-[700]  ${style.heading}`}>
          EVENTS
        </div>
        <div className={`text-[100px] font-[700] ${style.heading}`}>
          TIMELINE
        </div>
      </div>
      <div>
        <Carousel
          responsive={responsive}
          //   className='md:flex bg-zinc-900  bg-opacity-40 pt-20 justify-center pb-20'
          className=" pt-20 pb-20"
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={20}
          centerMode={false}
          customTransition="all 10s linear"
          dotListClass=""
          draggable
          focusOnSelect={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={100}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
          transitionDuration={5000}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            src={codekaze}
            className="md:w-50 md:h-50 w-2/3"
          />
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            src={appdev}
            className="md:w-50 md:h-50 w-2/3"
          />
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            src={shuriken}
            className="md:w-50 md:h-50 w-2/3"
          />
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            src={codekaze}
            className="md:w-50 md:h-50 w-2/3"
          />
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            src={appdev}
            className="md:w-50 md:h-50 w-2/3"
          />
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            src={shuriken}
            className="md:w-50 md:h-50 w-2/3"
          />
        </Carousel>*/
      </div>
    </>
  );
};

export default Events;
