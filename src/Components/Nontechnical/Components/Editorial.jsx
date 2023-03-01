import Aos from "aos";
import React, { useEffect } from "react";
import style from "./Domainspage.module.css";
import leftlogo from "./assets/editorial.png";
import linelogo from "./logo2.png";
// import { motion } from "framer-motion";
import "aos/dist/aos.css";
import FooterMin from "../../FooterMin/FooterMin";

const Editorial = () => {
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
            EDITORIAL
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
            Welcome to the Editorial Domain of CN SRM! Our aim is to provide
            students with a platform to express their thoughts, opinions, and
            ideas through writing.
            <br />
            <br />
            <strong>
              <u>About us</u>
            </strong>
            <br />
            We are a group of writers, journalists, and creative individuals who
            are passionate about the power of words. Our goal is to create an
            inclusive community where students can hone their writing skills,
            share their perspectives, and engage with a wider audience.
            <br />
            <br />
            <strong>
              <u>What we offer</u>
            </strong>
            <br />
            <ul className="list-inside list-disc">
              <li>
                Regular writing workshops and discussions to improve writing
                skills and develop new ideas.
              </li>
              <li>
                Opportunities to contribute to the club's online publication,
                where members can share their writing with a wider audience.
              </li>
              <li>
                Access to resources and mentorship from experienced writers and
                editors.
              </li>
              <li>
                Opportunities to network and collaborate with peers, industry
                professionals, and academic experts.
              </li>
            </ul>
            <br />
            Join a community of like-minded individuals who are passionate about
            writing and journalism. Attend writing workshops and discussions to
            improve your skills and develop new ideas. Contribute to the club's
            online publication and showcase your writing to a wider audience.
            Get mentorship from experienced writers and editors.
            <br />
            <br />
            If you're a student at SRMIST and are interested in writing,
            journalism, or creative expression, we invite you to join our club.
            Whether you're just starting out or already have experience, we have
            something for everyone.
          </p>
          <img className=" mx-2 h-80" src={linelogo} alt="" />
        </div>
      </div>
      <FooterMin classNames="block lg:absolute mb-5  lg:bottom-0" />
    </div>
  );
};

export default Editorial;
