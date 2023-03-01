import Aos from "aos";
import React, { useEffect } from "react";
import style from "./Domainspage.module.css";
import leftlogo from "./assets/creatives.png";
import linelogo from "./logo2.png";
// import { motion } from "framer-motion";
import "aos/dist/aos.css";
import FooterMin from "../../FooterMin/FooterMin";

const Creatives = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div
      className={`${style.domainHeadingbg} top-52 lg:top-0 h-full lg:h-3/5  absolute flex flex-col justify-center items-center pb-40`}
    >
      {/* Our Domain section */}
      <section className=" text-[#EE4623] tracking-widest mt-20">
        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl md:text-7xl lg:mt-32 md:mt-96 ">NON TECHNICAL</p>
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
            CREATIVES
            {/* </motion.div> */}
          </p>
        </div>
      </section>
      <div className="flex flex-col  lg:flex-row mt-8 items-center justify-center  lg:pb-0 ">
        <div>
          <img
            className=" lg:w-[380px] h-auto w-60 md:w-80  lg:mb-0 lg:ml-20 lg:mr-20 rounded-xl "
            data-aos="zoom-out"
            src={leftlogo}
            alt=""
          />
        </div>
        <div
          className=" flex text-center justify-center items-center lg:w-1/2 mx-2 md:mx-5 my-10"
          data-aos="zoom-in"
        >
          <img className=" mx-2 bottom-0 h-80" src={linelogo} alt="" />
          <p className=" text-white mx-10 text-base md:text-md lg:leading-7 lg:text-sm lg:text-left h-80 overflow-y-auto md:h-60">
            Welcome to the Design Domain of CN SRM! Our aim is to provide
            students with a platform to learn about design, to develop their
            creative skills, and to showcase their work.
            <br />
            <br />
            <strong>
              <u>About us</u>
            </strong>
            <br />
            We are a group of creative individuals who are passionate about
            design and its impact on the world. Our goal is to provide students
            with the resources and opportunities they need to explore their
            design interests and to build their portfolios.
            <br />
            <br />
            <strong>
              <u>What we offer</u>
            </strong>
            <br />
            <ul className="list-inside list-disc">
              <li>
                Workshops, tutorials, and discussions to learn about various
                aspects of design, such as graphic design, product design, and
                user experience (UX) design.
              </li>
              <li>
                Opportunities to work on real-world design projects and to
                showcase their work in a professional setting.
              </li>
              <li>
                Access to resources and mentorship from experienced designers
                and industry professionals.
              </li>
              <li>
                Opportunities to network and collaborate with peers, industry
                professionals, and academic experts.
              </li>
            </ul>
            <br />
            Join a community of like-minded individuals who are passionate about
            design. Attend workshops, tutorials, and discussions to learn about
            various aspects of design. Work on real-world design projects and
            showcase your work in a professional setting. Get mentorship from
            experienced designers and industry professionals.
            <br />
            <br />
            If you're a student at SRMIST and are interested in design,
            creativity, or the arts, we invite you to join our club. Whether
            you're just starting out or already have experience, we have
            something for everyone.
          </p>
          <img className=" mx-2 h-80" src={linelogo} alt="" />
        </div>
      </div>
      <FooterMin classNames="block lg:absolute mb-5  lg:bottom-0" />
    </div>
  );
};

export default Creatives;
