import { motion } from "framer-motion";
import React from "react";
import { Link /* , Links */ } from "react-router-dom";
import FooterMin from "../FooterMin/FooterMin";
import ninja from "./assets/Ninja img.svg";
import roll from "./assets/roll.png";
import style from "./Domains.module.css";

const Domains = () => {
  return (
    <div className={`${style.domainsbg} h-screen`}>
      <div className={`${style.ninjacontainer} hidden lg:flex`}>
        <img src={ninja} />
      </div>
      <div
        className={`${style.domainBoxes} text-[#8B5130] font-semibold font-mono hidden lg:flex`}>
        <div>
          <motion.div
            transition={{ duration: 0.6, ease: "easeOut" }}
            initial={{ x: "0" }}
            whileInView={{ x: "-100%" }}>
            <Link to="/technical">
              <img className="w-11/12 h-80" src={roll} />
              <span className="absolute z-50 text-3xl top-1/2 right-1/2 translate-x-1/2">
                Technical
              </span>
            </Link>
          </motion.div>
        </div>
        <div>
          <motion.div
            transition={{ duration: 0.6, ease: "easeOut" }}
            initial={{ x: "0" }}
            whileInView={{ x: "100%" }}
            className="relative">
            <Link to="/nontechnical">
              <img className="w-11/12 h-80" src={roll} />
              <span className="absolute z-50 text-3xl top-1/2 right-1/2 translate-x-1/2 -translate-y-10">
                Non Technical
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div
        className={`${style.domainBoxes} text-[#8B5130] font-semibold font-mono hidden md:flex lg:hidden`}>
        <div>
          <motion.div
            transition={{ duration: 0.6, ease: "easeOut" }}
            initial={{ x: "0" }}
            whileInView={{ x: "-18%", y: "0%" }}>
            <Link to="/technical">
              <img src={roll} />
            </Link>
            <span className="absolute z-50 text-3xl top-1/2 right-1/2 translate-x-1/2">
              Technical
            </span>
          </motion.div>
        </div>
        <div>
          <motion.div
            transition={{ duration: 0.6, ease: "easeOut" }}
            initial={{ x: "0" }}
            whileInView={{ x: "18%", y: "0%" }}
            className="relative">
            <Link to="/nontechnical">
              <img src={roll} />
              <span className="absolute z-50 text-3xl top-1/2 right-1/2 translate-x-1/2 -translate-y-10">
                Non Technical
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div
        className={`${style.domainBoxes} text-[#8B5130] font-semibold font-mono flex md:hidden`}>
        <div>
          <motion.div
            transition={{ duration: 0.6, ease: "easeOut" }}
            initial={{ x: "0" }}
            whileInView={{ x: "50%", y: "-65%" }}>
            <Link to="/technical">
              <img className="h-72" src={roll} />
              <span className="absolute z-50 text-2xl sm:text-3xl top-1/2 right-1/2 translate-x-1/2">
                Technical
              </span>
            </Link>
          </motion.div>
        </div>
        <div>
          <motion.div
            transition={{ duration: 0.6, ease: "easeOut" }}
            initial={{ x: "0" }}
            whileInView={{ x: "-50%", y: "35%" }}
            className="relative">
            <Link to="/nontechnical">
              <img className="h-72" src={roll} />
              <span className="absolute z-50 text-2xl sm:text-3xl top-1/2 right-1/2 translate-x-1/2 -translate-y-10">
                Non Technical
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
      <FooterMin classNames="absolute bottom-6" />
    </div>
  );
};

export default Domains;
