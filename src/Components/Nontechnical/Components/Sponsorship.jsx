import Aos from "aos";
import React, { useEffect } from "react";
import style from "./Domainspage.module.css";
import leftlogo from "./assets/sponshorship.png";
import linelogo from "./logo2.png";
// import { motion } from "framer-motion";
import "aos/dist/aos.css";
import FooterMin from "../../FooterMin/FooterMin";

const Sponsorship = () => {
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
          <p className="text-5xl md:text-7xl lg:mt-32 md:mt-96 ">
            NON TECHNICAL
          </p>
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
            SPONSORSHIP
            {/* </motion.div> */}
          </p>
        </div>
      </section>
      <div className="flex flex-col  lg:flex-row mt-8 items-center justify-center  lg:pb-0 ">
        <div>
          <img
            className=" lg:w-[380px] h-auto w-60 md:w-80  lg:mb-0 lg:ml-20 lg:mr-20 rounded"
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
            Welcome to the Sponsorship Domain of CN SRM! Our aim is to provide
            businesses and organizations with opportunities to support and
            engage with our student community.
            <br />
            <br />
            <strong>
              <u>About us</u>
            </strong>
            <br />
            We are a group of students who are passionate about creating
            positive change and providing value to our community. Our goal is to
            provide businesses and organizations with opportunities to support
            our club and its initiatives, while also gaining exposure to a
            talented and engaged student community.
            <br />
            <br />
            <strong>
              <u>What we offer</u>
            </strong>
            <br />
            <ul className="list-inside list-disc">
              <li>
                A variety of sponsorship packages to meet the needs and budgets
                of different businesses and organizations.
              </li>
              <li>
                Opportunities for businesses and organizations to showcase their
                products, services, and brand to a talented and engaged student
                community.
              </li>
              <li>
                Opportunities for businesses and organizations to network and
                engage with our members, both online and at events.
              </li>
              <li>
                Access to resources and support to help businesses and
                organizations make the most of their sponsorship investment.
              </li>
            </ul>
            <br />
            <strong>
              <u>Sponsorship Benefits</u>
            </strong>
            <br />
            <ul className="list-inside list-disc">
              <li>
                Showcase your products, services, and brand to a talented and
                engaged student community.
              </li>
              <li>
                Network and engage with our members, both online and at events.
              </li>
              <li>
                Support a positive and inclusive community of students who are
                passionate about creating change.
              </li>
              <li>
                Gain exposure to a talented and engaged student community who
                are the future leaders of their fields.
              </li>
            </ul>
            <br />
            If you're a business or organization that is interested in
            supporting and engaging with our student community, we invite you to
            explore our sponsorship packages.
          </p>
          <img className=" mx-2 h-80" src={linelogo} alt="" />
        </div>
      </div>
      <FooterMin classNames="block lg:absolute mb-5  lg:bottom-0" />
    </div>
  );
};

export default Sponsorship;
