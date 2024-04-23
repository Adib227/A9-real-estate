import React from 'react';
import 'animate.css';

const Partner = () => {
  return (
    <div className=" grid py-20 bg-[#FD6E0A33] my-8">
      <div className=" max-w-full mx-auto text-2xl lg:text-4xl font-semibold">
        Out Partners
      </div>
      <div className="max-w-full mx-auto text-lg lg:text-lg px-7 lg:px-0 pt-4 lg:pt-6 font-normal">
        We only work with the best companies around the globe
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:flex lg:flex gap-x-20 md:gap-x-16 lg:gap-x-48  space-y-8 lg:space-y-0 pt-10 lg:pt-20">
        <img src="https://i.ibb.co/gJLB0kB/1.png" alt="" />
        <img src="https://i.ibb.co/Y7w3sys/2.png" alt="" />
        <img src="https://i.ibb.co/S3GKdtm/3.png" alt="" />
        <img src="https://i.ibb.co/W5KzbNs/4.png" alt="" />
        <img src="https://i.ibb.co/BVzPwYx/5.png" alt="" />
      </div>
    </div>
  );
};

export default Partner;
