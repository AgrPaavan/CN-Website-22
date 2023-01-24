import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
import cnlogo from "./assets/cnlogo.png";
import { Model } from "./Shuriken";

import { Canvas } from "@react-three/fiber";

function Navbar() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const goToAbout = async () => {
    var scroller = Scroll.scroller;
    await new Promise((r) => setTimeout(r, 500));
    scroller.scrollTo("about", { smooth: true, offset: -80, duration: 200 });
  };

  const [nav, setNav] = useState(false);
  return (
    <div>
      <nav className="dark:bg-opacity-60 backdrop-blur-lg backdrop-filter px-2 sm:px-4 py-2.5 dark:bg-neutral-900 fixed w-full z-20 top-0 left-0 border-b border-neutral-900 dark:border-neutral-900  ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link
            to="/"
            onClick={goToTop}
            className="flex items-center mx-2 z-20"
          >
            <img src={cnlogo} className="h-8 " alt="CN Logo" />
          </Link>
          <div className="hidden md:flex md:order-2 px-5 py-2.5 mr-3 md:mr-0">
            <Canvas className="!w-10 !h-10">
              <ambientLight intensity={10} color={"#942b14"} />
              <spotLight position={[0, 0, 20]} />
              <Suspense fallback={null}>
                <Model />
              </Suspense>
            </Canvas>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className="flex md:hidden md:order-2 px-5 py-2.5 mr-3 md:mr-0 z-20"
          >
            <Canvas className="!w-10 !h-10">
              <ambientLight intensity={10} color={"#942b14"} />
              <spotLight position={[0, 0, 20]} />
              <Suspense fallback={null}>
                <Model />
              </Suspense>
            </Canvas>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex ml-10 md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex text-white flex-col p-4 mt-4 border  md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                {/* <Scroll
                  to="about"
                  smooth
                  duration={500}
                  offset={-80}
                  className="hover:cursor-pointer"
                > */}
                <Link to="/" className="block" onClick={goToAbout}>
                  About
                </Link>
                {/* </Scroll> */}
              </li>
              <li>
                <Link
                  to="/domains"
                  onClick={goToTop}
                  className="block py-2 pr-4 pl-3  md:dark:text-white focus:text-white md:p-0 dark:hover:text-white "
                >
                  Domains
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  onClick={goToTop}
                  className="block py-2 pr-4 pl-3  md:dark:text-white focus:text-white  md:p-0 dark:hover:text-white"
                >
                  Team
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/events"
                  onClick={goToTop}
                  className="block py-2 pr-4 pl-3  md:dark:white focus:text-white  md:p-0   dark:hover:text-white "
                >
                  Events
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        {nav && (
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-[#b0442c] text-gray-500">
            <ul className="flex flex-col justify-center items-center">
              <li className="px-4 py-6 text-3xl capitalize font-medium">
                <Link
                  onClick={() => {
                    setNav(!nav);
                    window.scrollBy(0, 1);
                    goToTop();
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="px-4 py-6 text-3xl capitalize font-medium">
                <Link
                  onClick={() => {
                    setNav(!nav);
                    window.scrollBy(0, 1);
                    goToTop();
                  }}
                  to="/domains"
                >
                  Domains
                </Link>
              </li>
              <li className="px-4 py-6 text-3xl capitalize font-medium">
                <Link
                  onClick={() => {
                    setNav(!nav);
                    window.scrollBy(0, 1);
                    goToTop();
                  }}
                  to="/team"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
