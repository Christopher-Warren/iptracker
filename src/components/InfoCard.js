import React from "react";

const InfoCard = ({ ip, isp, location, timeZone }) => {
  return (
    <div className="relative flex md:flex-row flex-col w-10/12 md:w-9/12 -mb-8 md:-mb-20 md:-my-px  mx-auto px-4 md:py-0 pt-0 pb-3  bg-gray-100 shadow-xl rounded-lg z-10 overflow-hidden">
      <div className="flex-1 md:h-40 md:py-4 pt-2 px-4 md:text-left text-center rubik tracking-wider">
        <div className=" text-xs font-medium text-gray-600 md:pb-2 z-30">
          IP ADDRESS
        </div>
        <div className="text-gray-800 text-xl md:text-3xl font-light tracking-wide md:mr-20 leading-tight">
          {ip}
        </div>
      </div>
      <hr className="border-r border-gray-600 opacity-25 h-20 my-auto mx-5 md:block hidden" />
      <div className="flex-1 md:h-40 md:py-4 pt-2 px-4 md:text-left text-center rubik tracking-wider">
        <div className=" text-xs font-medium text-gray-600 md:pb-2">
          LOCATION
        </div>
        <div className="text-gray-800 text-xl md:text-3xl font-light tracking-wide md:mr-20 leading-tight">
          {location}
        </div>
      </div>
      <hr className="border-r border-gray-600 opacity-25 h-20 my-auto mx-5 md:block hidden" />
      <div className="flex-1 md:h-40 md:py-4 pt-2 px-4 md:text-left text-center rubik tracking-wider">
        <div className=" text-xs font-medium text-gray-600 md:pb-2">
          TIMEZONE
        </div>
        <div className="text-gray-800 text-xl md:text-3xl font-light tracking-wide md:mr-20 leading-tight">
          {timeZone}
        </div>
      </div>
      <hr className="border-r border-gray-600 opacity-25 h-20 my-auto mx-5 md:block hidden" />
      <div className="flex-1 md:h-40 md:py-4 pt-2 px-4 md:text-left text-center rubik tracking-wider">
        <div className=" text-xs font-medium text-gray-600 md:pb-2">ISP</div>
        <div className="text-gray-800 text-xl md:text-3xl font-light tracking-wide md:mr-20 leading-tight">
          {isp}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
