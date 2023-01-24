// import {
//   Environment,
//   OrbitControls,
//   PerspectiveCamera,
//   Sky,
//   Stats,
//   Text,
// } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { getProject } from "@theatre/core";
// import { editable as e, SheetProvider } from "@theatre/r3f";
// import extension from "@theatre/r3f/dist/extension";
// import studio from "@theatre/studio";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  /* animate, */ motion,
  /* useAnimation, */ useInView,
} from "framer-motion";
import React, {
  /* Suspense, */ useEffect,
  useRef /* , useState */,
} from "react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
// import ClipLoader from "react-spinners/ClipLoader";
// import { LoopPingPong } from "three";
// import { ref } from "valtio";
import { DecoderText } from "../DecoderText";
// import { Cloud1 } from "../Smoke/Smoke";
import Tiles from "../Tiles/Tiles";
import num1 from "./assets/01.svg";
import num2 from "./assets/02.svg";
// import num3 from "./assets/03.svg";
import arrow from "./assets/arrow.svg";
// import codekaze from "./assets/CodeKaze 1.svg";
import filler from "./assets/filler.svg";
import group from "./assets/Group.svg";
import img1 from "./assets/Img1.svg";
import img2 from "./assets/Img2.svg";
// import img3 from "./assets/Img3.svg";
// import appdev from "./assets/intro to appdev 1.svg";
import ninja2 from "./assets/Ninja img.svg";
import ninja from "./assets/ninja.svg";
import rect from "./assets/Rectangle 126.svg";
import rect2 from "./assets/Rectangle 127.svg";
// import shuriken from "./assets/shuriken wars 1.svg";
// import House from "./House/house";
// import state from "./House/ninjahouse.json";
import style from "./Landing.module.css";
// studio.initialize()
// studio.extend(extension)
// const demoSheet = getProject("Demo Project", { state: state }).sheet(
//   "Demo Sheet",
// );

function Landing() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  // const [Loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     {
  //       setLoading(false);
  //     }
  //   }, 5000);
  //   demoSheet.project.ready.then(() => {
  //     demoSheet.sequence.play({ iterationCount: 1, range: [0, 10] });
  //   });
  // }, []);
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef);
  const domainsRef = useRef(null);
  const domainsInView = useInView(domainsRef);
  const eventsRef = useRef(null);
  const eventsInView = useInView(eventsRef);

  return (
    <>
      <div className="h-screen w-full">
        {/* {House ? (
          <Canvas>
            <Cloud1 />
            <SheetProvider sheet={demoSheet}>
              <ambientLight intensity={2} />
              <e.pointLight theatreKey="pLight" position={[40, 40, 40]} />
              <Suspense fallback={null}>
                <House theatreKey="House" />
              </Suspense>
            </SheetProvider>
          </Canvas>
        ) : null} */}
      </div>
      <main className="absolute bg">
        <div className="md:pb-10 pb-20">
          <div className="mx-auto left-6 max-w-screen-lg overflow-hidden justify-center container pb-20">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 4, duration: 2 }}
              src={ninja}
              className="inset-0 object-cover mx-auto mt-5 pt-12 md:pt-0"
              alt="Ninja"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 5, duration: 2 }}
              src={group}
              className="md:w-auto w-2/3 animate-slow-spin absolute inset-0 object-cover mx-auto mt-10 md:bottom-8 md:top-28 "
              alt="Group"
            />
          </div>
        </div>
      </main>

      {/* About */}
      <div className="bg-zinc-900 bg-opacity-40" id="about" name="about">
        <div className="grid grid-cols-1 gap-5 py-8 px-3 xl:grid-cols-2 pb-20">
          <div className="">
            <div
              className={`xl:text-7xl md:text-6xl text-5xl text-transparent bg-clip-text xl:text-left text-center xl:pl-5 xl:ml-7 font-extrabold xl:mb-10 mb-5 xl:pb-12 pb-2 xl:pt-20 pt-10 ${style.aboutheading}`}
              ref={aboutRef}
            >
              <DecoderText text="ABOUT CN" start={aboutInView} delay={500} />
            </div>
            <p className="text-white xl:text-left text-center mx-2 md:pl-5 md:ml-7 pl-3 pr-3 md:text-2xl text-1 md:pb-20 mb-10">
              CODING NINJAS CLUB SRM, our syndicate,is one of the institute’s
              fastest-growing and one of the most popular clubs. Coding Ninjas
              does a great job of weaving the notion of “simplicity and
              creativity ” throughout its events and work. We work in
              collaboration with CODING NINJAS company. We team up with bright
              minds to create exciting and meaningful experiences. Along the way
              , We have a footfall of over 50,000 young and creative minds from
              various concerts around the World. We are a diverse team of
              budding intellectuals, who are keen and highly driven to create.
              We want to be the best in our domain.
            </p>
          </div>
          <div className="hidden xl:block pl-20 pr-0">
            <img src={filler} className="md:w-2/3 ml-10 pb-5 pt-20" alt="" />
          </div>
        </div>
      </div>

      {/* Domains */}
      <main className="bg" id="domains">
        <div>
          <div
            data-aos="fade"
            className={`md:text-7xl text-5xl text-transparent bg-clip-text md:text-left text-center md:pl-5 md:ml-7 font-extrabold md:mb-10 mb-5 md:pb-5 md:pt-20 pt-10 lg:w-[29.8vw]  ${style.domainsheading}`}
            ref={domainsRef}
          >
            <DecoderText text="DOMAINS" start={domainsInView} delay={500} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 py-8 px-3 md:grid-cols-2 mt-10">
          {/* Technical */}
          <div data-aos="fade-up">
            <div className="relative">
              <h3 className="text-[#EE4623] text-4xl font-[400] text-left ml-11 pt-20 pb-5">
                Technical
              </h3>
              <div className="absolute inset-0 justify-center ">
                <img
                  className="md:w-1/2 pl-5 md:h-25 md:pl-10 w-2/3"
                  src={num1}
                  alt=""
                />
              </div>
            </div>
            <p className="text-white md:text-xl text-[12px] text-left md:ml-12 md:pr-20 md:mr-10 md:pb-10 ml-12 mb-5 mr-8 ">
              This domain is the backbone of the club that needs certain
              ideation, technical skills and innovation. Members of this domain
              are the pillars of the team who work tirelessly to make it what it
              is today! Starting from the journey of 'HELLO WORLD' to creating a
              full website, this domain completes it all. So, fasten your seat
              belts for the technical fight.
            </p>
            <div className="flex md:pb-20 pb-10">
              <div className="flex-none text-[#EE4623] text-left ml-12 mr-0 font-bold">
                VIEW DETAILS
              </div>
              <Link to="/technical">
                {" "}
                <img
                  className="flex-intial w-4 h-4 mt-1 ml-5"
                  src={arrow}
                  alt=""
                />
              </Link>
            </div>
          </div>
          {/* image */}
          <div data-aos="fade" className=" xl:ml-20 xl:pl-14 ml-10 pr-10">
            <img className="lg:pl-10 pl-0" src={img1} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 py-8 px-3 md:grid-cols-2 ">
          {/* image */}
          <div data-aos="fade" className="hidden md:block ml-0 pr-5">
            <img className="lg:pl-10 pl-0" src={img2} alt="" />
          </div>
          {/* Corporate*/}
          <div data-aos="fade-up">
            <div className="relative">
              <h3 className="text-[#EE4623] text-4xl font-[400] text-left ml-11 pt-20 pb-5">
                Non Technical
              </h3>
              <div className="absolute inset-0 justify-center ">
                <img
                  className="md:w-1/2 pl-5 md:h-25 md:pl-10 w-2/3"
                  src={num2}
                  alt=""
                />
              </div>
            </div>
            <p className="text-white md:text-xl text-[12px] text-left md:ml-12 md:pr-20 md:mr-10 md:pb-10 ml-12 mb-5 mr-8 ">
              In CN, we not only work in technical fields, but also in non tech
              fields. In this domain, we work with creative minds to produce
              good content for stories and posts, we work with the strategic
              minds to get sponsorships and we have smart and active people
              working with the corporate team. A good outcome requires a lot of
              work at the backend which is done through these domains. We focus
              on overall involvement. We learn,work and inspire everyone to
              reach excellence.
            </p>
            <div className="flex md:pb-20 pb-10">
              <div className="flex-none text-[#EE4623] text-left ml-12 mr-0 font-bold">
                VIEW DETAILS
              </div>
              <Link to="/nontechnical">
                {" "}
                <img
                  className="flex-intial w-4 h-4 mt-1 ml-5"
                  src={arrow}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div
            data-aos="fade"
            className="md:hidden block xl:ml-20 xl:pl-14 ml-10 pr-10"
          >
            <img className="lg:pl-10 pl-0" src={img2} alt="" />
          </div>
        </div>
      </main>

      {/* Events */}
      <div id="events">
        <div
          data-aos="fade"
          className={`md:text-7xl text-5xl text-transparent bg-clip-text text-center font-extrabold md:mb-10 mb-5 pb-2 md:pt-20 pt-10 mt-10 ${style.eventheading}`}
          ref={eventsRef}
        >
          <DecoderText text="EVENTS" start={eventsInView} delay={500} />
        </div>
      </div>
      <div className="pb-5">
        <div className="text-white text-center md:text-xl pb-10">
          Know more about the upcoming{" "}
          <Link to="/events" onClick={goToTop}>
            <span className="text-orange-700">Events</span>
          </Link>
        </div>
        <div className="absolute right-0 bg-black">
          <img src={rect} alt="" />
        </div>
      </div>
      <Tiles />
      {/* <Carousel responsive={responsive}
                className={`md:flex bg-zinc-900  bg-opacity-40 pt-20 justify-center pb-20`}
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={10}
                centerMode={false}
                customTransition="all 10s linear"
                dotListClass=""
                draggable
                focusOnSelect={true}
                infinite
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
                    transition={{ loop: Infinity }}
                    animate={{
                        rotate: [0, 0, 5, 5, 0],
                    }}
                    src={codekaze} className='md:w-50 md:h-50 w-2/3' />
                <motion.img
                    transition={{ loop: Infinity }}
                    animate={{
                        rotate: [0, 0, 10, 10, 0],
                    }} src={appdev} className='md:w-50 md:h-50 w-2/3' />
                <motion.img
                    transition={{ loop: Infinity }}
                    animate={{
                        rotate: [0, 0, 7, 7, 0],
                    }} src={shuriken} className='md:w-50 md:h-50 w-2/3' />
                <motion.img
                    transition={{ loop: Infinity }}
                    animate={{
                        rotate: [0, 0, 7, 7, 0],
                    }}
                    src={codekaze} className='md:w-50 md:h-50 w-2/3' />
                <motion.img
                    transition={{ loop: Infinity }}
                    animate={{
                        rotate: [0, 0, 7, 7, 0],
                    }} src={appdev} className='md:w-50 md:h-50 w-2/3' />
                <motion.img
                    transition={{ loop: Infinity }}
                    animate={{
                        rotate: [0, 0, 7, 7, 0],
                    }} src={shuriken} className='md:w-50 md:h-50 w-2/3' />

            </Carousel> */}
      <div className="absolute left-0 bg-black">
        <img src={rect2} alt="" />
      </div>

      <div className="justify-center md:mt-10 pt-20 pb-20 md:mb-10 px-20 ">
        <img src={ninja2} className="mx-auto" alt="" />
      </div>
    </>
  );
}

export default Landing;
