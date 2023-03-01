import React from "react";
import { Link } from "react-router-dom";
import FooterMin from "../FooterMin/FooterMin";
import aimlimg from "./Components/assets/aiml_br.png";
import webdevimg from "./Components/assets/web_dev_br.png";
import compimg from "./Components/assets/comp_prog_br.png";
import ninja from "./assets/ninja.svg";
import appimg from "./Components/assets/app_dev_br.png";
import shiruken from "./assets/shiruken.png";
import styles from "./Technical.module.css";

function Technical() {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${styles.technicalbg} uppercase mt-32 sm:mt-0`}
    >
      <div className="grid grid-cols-1 grid-rows-4 lg:mt-12  sm:grid-cols-3 sm:grid-rows-2 gap-y-16 sm:gap-y-20 md:gap-20 lg:gap-x-60 lg:gap-y-36">
        <div
          className={`justify-self-center self-center opacity-0  text-lg text-white font-semibold ${styles.reveal}`}
        >
          <Link to="/technical/cp">
            <img
              src={compimg}
              alt=""
              className="transition-transform hover:scale-110 h-56 translate-x-5"
            />
            <p className="mt-2 uppercase">competitive programming</p>
          </Link>
        </div>

        <div className="row-span-2 justify-self-center self-center hidden sm:flex">
          <img src={ninja} alt="" className={`h-36 ${styles.flip}`} />
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-lg text-white sm:hidden font-semibold ${styles.reveal1}`}
        >
          <Link to="/technical/webdev">
            <img
              src={webdevimg}
              alt=""
              className="transition-transform hover:scale-110 h-56"
            />
             <p className="mt-2">Web Dev</p>
          </Link>
        </div>

        <div
          className={`justify-self-center self-center opacity-0 text-lg text-white hidden sm:grid  font-semibold ${styles.reveal2}`}
        >
          <Link to="/technical/webdev">
            <img
              src={webdevimg}
              alt=""
              className="transition-transform hover:scale-110 h-56"
            />
             <p className="mt-2">Web Dev</p>
          </Link>
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-lg text-white sm:hidden font-semibold ${styles.reveal2} `}
        >
          <Link to="/technical/aiml">
            <img
              src={aimlimg}
              alt=""
              className="transition-transform hover:scale-110 h-56"
            />
             <p className="mt-2">AI/ML</p>
          </Link>
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-lg text-white hidden sm:grid font-semibold ${styles.reveal1} `}
        >
          <Link to="/technical/aiml">
            <img
              src={aimlimg}
              alt=""
              className="transition-transform hover:scale-110 h-56"
            />
            <p className="mt-2">AI/ML</p>
          </Link>
        </div>

        <div
          className={`justify-self-center self-center opacity-0  text-lg text-white font-semibold ${styles.reveal3}`}
        >
          <Link to="/technical/appdev">
            <img
              src={appimg}
              alt=""
              className="transition-transform hover:scale-110 h-56"
            />
            <p className="mt-2">App Dev</p>
          </Link>
        </div>
      </div>

      <img
        className={`absolute hidden h-16 w-16 md:flex opacity-0 top-32 left-40 ${styles.star1}`}
        src={shiruken}
        alt=""
      />
      <img
        className={`absolute hidden h-16 w-16 md:flex  opacity-0 bottom-32 left-40 ${styles.star2}`}
        src={shiruken}
        alt=""
      />
      <img
        className={`absolute hidden h-16 w-16 md:flex  opacity-0 top-32 right-40 ${styles.star3}`}
        src={shiruken}
        alt=""
      />
      <img
        className={`absolute hidden h-16 w-16 md:flex  opacity-0 bottom-32 right-40 ${styles.star4}`}
        src={shiruken}
        alt=""
      />
      <FooterMin classNames="py-6 sm:py-0 sm:absolute sm:bottom-6" />
    </div>
  );
}

export default Technical;
