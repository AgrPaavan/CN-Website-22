import { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
// import lottyimg from "./Components/Landing/assets/land_lazy.json";
// import teamlottyimg from "./Components/Landing/assets/team_lazy.json";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Chatbot from "./Components/Chatbot/Chatbot";
import Domains from "./Components/Domains/Domains";
// import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
// import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Corporate from "./Components/Nontechnical/Components/Corporate";
import Creatives from "./Components/Nontechnical/Components/Creatives";
import Editorial from "./Components/Nontechnical/Components/Editorial";
import Sponsorship from "./Components/Nontechnical/Components/Sponsorship";
import Nontechnical from "./Components/Nontechnical/Nontechnical";
import ParticleBG from "./Components/ParticleBG/ParticleBG";
// import Team from "./Components/Team/Team";
import Team from "./Components/Team/Team";
import TeamNew from "./Components/Team/TeamNew";
import AIML from "./Components/Technical/Components/AIML";
import AppDev from "./Components/Technical/Components/App";
import Competitive from "./Components/Technical/Components/Competitive";
import Web from "./Components/Technical/Components/Web";
import Technical from "./Components/Technical/Technical";
const LazyLanding = React.lazy(() => import("./Components/Landing/Landing"));
const LazyTeam = React.lazy(() => import("./Components/Team/Team"));

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="App">
      {/* <motion.div
        initial={{ opacity: 0 }} whileInView={{opacity:1}}
        transition={{ delay: 8 }}
        >
        <Navbar/>
     </motion.div> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 8 }}
      ></motion.div>
      {/* <Chatbot /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {loading} ?
              {
                <div className="flex absolute top-[40%] left-[40%] md:left-[45%] md:top-[45%] ">
                  <ClimbingBoxLoader
                    color="#EE4623"
                    loading={loading}
                    // cssOverride={override}
                    size={40}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              }
              :{<Navbar />}
              <Suspense fallback={<div>Loading......</div>}>
                <LazyLanding />
                <Footer />
              </Suspense>
            </>
          }
        />
        <Route
          path="technical"
          element={
            <>
              <Navbar />
              <Technical />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="nontechnical"
          element={
            <>
              <Navbar />
              <Nontechnical />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="team"
          // element={
          //   <>
          //     <Navbar />
          //     loading ?
          //     {
          //       <div className="flex absolute top-[40%] left-[40%] md:left-[45%] md:top-[45%] ">
          //         <ClimbingBoxLoader
          //           color="#EE4623"
          //           loading={loading}
          //           // cssOverride={override}
          //           size={40}
          //           aria-label="Loading Spinner"
          //           data-testid="loader"
          //         />
          //       </div>
          //     }
          //     :
          //     {
          //       <>
          //         <Suspense fallback={<div>Loading......</div>}>
          //           <LazyTeam />
          //         </Suspense>
          //       </>
          //     }
          //   </>
          // }
          element={
            <>
              <Navbar />
              <TeamNew />
            </>
          }
        />
        <Route
          path="domains"
          element={
            <>
              <Navbar />
              <Suspense fallback={<div>Loading.....</div>}>
                <Domains />
              </Suspense>
              <ParticleBG />
            </>
          }
        />
        <Route
          path="nontechnical/editorial"
          element={
            <>
              <Navbar />
              <Editorial />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="nontechnical/creatives"
          element={
            <>
              <Navbar />
              <Creatives />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="nontechnical/corporate"
          element={
            <>
              <Navbar />
              <Corporate />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="nontechnical/sponsorship"
          element={
            <>
              <Navbar />
              <Sponsorship />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="technical/cp"
          element={
            <>
              <Navbar />
              <Competitive />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="technical/aiml"
          element={
            <>
              <Navbar />
              <AIML />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="technical/appdev"
          element={
            <>
              <Navbar />
              <AppDev />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="technical/webdev"
          element={
            <>
              <Navbar />
              <Web />
              <ParticleBG />
            </>
          }
        />
        <Route path="/cq-registration" element={<CQRegistration />} />
          <Route path="/apply-now" element={<ApplyNow />} />
      </Routes>
    </div>
  );
}

export default App;

const CQRegistration = () => {
  useEffect(() => {
    window.location.href = "https://cq-registration.vercel.app/register";
  }, []);

  return <></>;
};

const ApplyNow = () => {
  useEffect(() => {
    window.location.href = "https://cn24recruitment.vercel.app";
  }, []);

  return <></>;
};

