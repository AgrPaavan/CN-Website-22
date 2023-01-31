import React, { useEffect } from "react";
import style from "./Domainspage.module.css";
import leftlogo from "./logo.svg";
import linelogo from "./logo2.png";
import Aos from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import FooterMin from "../../FooterMin/FooterMin";

const AIML = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div
      className={`${style.domainHeadingbg} top-0 h-full lg:h-screen  absolute `}
    >
      {/* Our Domain section */}
      <section className=" text-[#EE4623] tracking-widest mt-20">
        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl md:text-7xl font-bold ">TECHNICAL</p>
          <p className="text-3xl md:text-5xl font-medium pb-6">
            {/* <motion.div
              animate={{
                x: 0,
                y: 0,
                scale: 2  ,
                rotate: 0,
              }}
              transition={{ duration: 0.5, ease: "ease-out" }}
            > */}
            AI-ML
            {/* </motion.div> */}
          </p>
        </div>
      </section>
      <div className="flex flex-col  lg:flex-row mt-20 items-center justify-center  lg:pb-0">
        <div>
          <img
            className=" lg:w-[380px] h-auto w-60 md:w-80  lg:mb-0 lg:ml-20 lg:mr-20 md "
            data-aos = "zoom-out"
            src={leftlogo}
            alt=""
          />
        </div>
        <div className=" flex text-center justify-center items-center lg:w-1/2 mx-2 md:mx-5" data-aos="zoom-in">
          <img className=" mx-2 bottom-0 h-64" src={linelogo}  alt="" />
          <p
            className=" text-white mx-10 text-base md:text-2xl lg:leading-9 lg:text-sm"
            
          >
            The last decade brought AI into the forefront of some of the world's
            most progressive technology companies. With AI and ML we can build
            high performance and data-intensive applications without
            compromising on speed. Indeed, AI & ML are the big tech terms for
            non-tech people.
          </p>
          <img className=" mx-2 h-64" src={linelogo} alt="" />
        </div>
       
      </div>
      <FooterMin classNames="block lg:absolute mb-6 lg:bottom-0" />
      
    </div>
  );
};

export default AIML;
