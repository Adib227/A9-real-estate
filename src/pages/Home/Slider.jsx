import React from 'react';
import Marquee from 'react-fast-marquee';

const Slider = () => {
  return (
    <>
      <div className="my-20 border-red-900 bg-[#0D0926]">
        <Marquee className="p-8 gap-x-4" pauseOnHover={true} speed={100}>
          <img
            className="mr-14"
            src="https://i.ibb.co/FwLvmms/download.png"
            alt=""
          />
          <img
            className="mr-14"
            src="https://i.ibb.co/R6JWb3Z/download-1.png"
            alt=""
          />
          <img
            className="mr-14"
            src="https://i.ibb.co/bjVTHPk/download-2.png"
            alt=""
          />
          <img
            className="mr-14"
            src="https://i.ibb.co/FwLvmms/download.png"
            alt=""
          />
          <img
            className="mr-14"
            src="https://i.ibb.co/p1TfjFt/download-3.png"
            alt=""
          />
          <img
            className="mr-14"
            src="https://i.ibb.co/yXg8Dsy/download-4.png"
            alt=""
          />
        </Marquee>
      </div>
      <div className="">
        <h1 className="max-w-full mx-auto text-6xl font-bold animate__animated animate__fadeInLeftBig">
          Welcome To <span className="text-orange-900"> Ten Build</span>
        </h1>
      </div>
    </>
  );
};

export default Slider;
