import Aos from "aos";
import React, { useEffect } from "react";
import style from "./Domainspage.module.css";
import leftlogo from "./assets/cp.png";
import linelogo from "./logo2.png";
// import { motion } from "framer-motion";
import "aos/dist/aos.css";
import FooterMin from "../../FooterMin/FooterMin";

const Competitive = () => {
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
          <p className="text-5xl md:text-7xl lg:mt-32 md:mt-96 ">TECHNICAL</p>
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
            COMPETITIVE PROGRAMMING
            {/* </motion.div> */}
          </p>
        </div>
      </section>
      <div className="flex flex-col  lg:flex-row mt-8 items-center justify-center  lg:pb-0 ">
        <div>
          <img
            className=" lg:w-[380px] h-auto w-60 md:w-80  lg:mb-0 lg:ml-20 lg:mr-20 rounded-xl"
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
            Welcome to the Competitive Programming Domain of CN SRM! Our aim is
            to provide students with a platform to learn and practice
            competitive programming, and to participate in various coding
            competitions.
            <br />
            <br />
            <strong>
              <u>About us</u>
            </strong>
            <br />
            We are a group of enthusiastic individuals who are passionate about
            competitive programming and coding challenges. Our goal is to create
            an environment where students can improve their problem-solving
            skills, learn new algorithms, and become proficient coders.
            <br />
            <br />
            <strong>
              <u>What we offer</u>
            </strong>
            <br />
            <ul className="list-inside list-disc">
              <li>
                Regular practice sessions and coding challenges to improve
                problem-solving skills and knowledge of algorithms.
              </li>
              <li>
                Preparatory sessions and study materials for coding competitions
                such as ACM ICPC, CodeForces, and HackerRank.
              </li>
              <li>
                Opportunities to participate in coding competitions and showcase
                your skills to a wider audience.
              </li>
              <li>
                Access to resources and mentorship from experienced coders and
                industry professionals.
              </li>
            </ul>
            <br />
            Join a community of like-minded individuals who are passionate about
            competitive programming. Attend regular practice sessions and coding
            challenges to improve your skills. Participate in coding
            competitions and showcase your skills to a wider audience. Get
            mentorship from experienced coders and industry professionals.
            <br />
            <br />
            If you're a student at SRMIST and are interested in competitive
            programming, we invite you to join our club. Whether you're just
            starting out or already have experience, we have something for
            everyone.
          </p>
          <img className=" mx-2 h-80" src={linelogo} alt="" />
        </div>
      </div>
      <FooterMin classNames="block lg:absolute mb-5  lg:bottom-0" />
    </div>
  );
};

export default Competitive;
