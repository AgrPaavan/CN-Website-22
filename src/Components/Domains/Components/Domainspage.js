import React from "react";
import style from "./Domainspage.module.css";
import leftlogo from "./logo.svg";
import linelogo from "./logo2.png";
const Domainspage = () => {
  return (
    <div className={`${style.domainHeadingbg} mt-20 h-auto lg:h-full absolute bottom-0`}>
      {/* Our Domain section */}
      <section className=" text-[#EE4623] tracking-widest mt-20">
        <div className="flex flex-col justify-center items-center">
          <p className=" text-4xl font-medium ">OUR</p>
          <p className=" text-7xl font-bold">DOMAIN</p>
          </div>
      </section>
      <div className="flex flex-col lg:flex-row mt-20 items-center justify-center pb-10 lg:pb-0">
        <div>
          <img className=" lg:w-[380px] h-auto w-60 md:w-80 mb-10 lg:mb-0 lg:ml-20 lg:mr-20 md " src={leftlogo} />
        </div>
        <div className=" flex text-center justify-center items-center lg:w-1/2 mx-2 md:mx-10">
          <img className=" mx-2" src={linelogo} />
            <p className=" text-white mx-10 text-base md:text-2xl lg:leading-9 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              maxime fuga alias inventore quia incidunt exercitationem veritatis
              explicabo fugiat dolore quis magnam maiores laboriosam consequatur
              iure nemo delectus voluptate, voluptatem voluptatum deleniti! Quas
              nisi, ratione consectetur quod beatae ullam possimus, labore
              praesentium vero eius dolores repellat corrupti repudiandae dicta
              quibusdam.
            </p>
          <img className=" mx-2" src={linelogo} />
        </div>
      </div>
    </div>
  );
};

export default Domainspage;
