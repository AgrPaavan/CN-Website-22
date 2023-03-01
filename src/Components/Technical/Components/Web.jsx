import Aos from "aos";
import React, { useEffect } from "react";
import style from "./Domainspage.module.css";
import linelogo from "./logo2.png";
import leftlogo from "./assets/web_dev.png";
// import { motion } from "framer-motion";
import "aos/dist/aos.css";
import FooterMin from "../../FooterMin/FooterMin";

const Web = () => {
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
            WEB DEV
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
            Welcome to the Web Development Club of CN SRM, a community of
            students who are passionate about creating and building innovative
            web applications. Our goal is to provide a platform for students to
            learn and enhance their web development skills, and to collaborate
            with like-minded individuals to bring their ideas to life.
            <br />
            <br />
            Our club offers a wide range of activities and events that cater to
            students of all levels, from beginners to experienced developers.
            Whether you are interested in learning HTML, CSS, and JavaScript, or
            you want to explore the latest trends in web development, our club
            has something for everyone.
            <br />
            <br />
            <strong>
              <u>Events and Workshops</u>
            </strong>
            <br />
            Our club regularly hosts workshops, coding sessions, and hackathons
            to help students learn and grow their skills in web development. Our
            events are led by experienced web developers, who are passionate
            about sharing their knowledge and expertise with others.
            <br />
            <br />
            <strong>
              <u>Networking Opportunities</u>
            </strong>
            <br />
            We believe that networking is an important aspect of a successful
            career in web development. Our club provides a platform for students
            to connect with industry professionals, to gain insight into the
            world of web development, and to learn about career opportunities in
            this field.
            <br />
            <br />
            Whether you are just starting out in web development or you are a
            seasoned pro, we welcome you to join us and be a part of our
            community.
            <br />
            <br />
            Join us today and take your first step towards a successful career
            in web development. With access to resources, events, and a
            supportive community, you will have everything you need to succeed.
          </p>
          <img className=" mx-2 h-80" src={linelogo} alt="" />
        </div>
      </div>
      <FooterMin classNames="block lg:absolute mb-5 lg:bottom-0" />
    </div>
  );
};

export default Web;
