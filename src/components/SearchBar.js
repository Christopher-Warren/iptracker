import React, { useState, useEffect } from "react";
import axios from "axios";
import InfoCard from "./InfoCard";
import ReactMap from "./ReactMap";

import ipfy from "../utils/ipfy";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  // Send to InfoCard
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");

  // Map data
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);

  // Marker popup
  const [data, setData] = useState(null);

  const search = async () => {
    const { data } = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=${ipfy}&ipAddress=${term}`
    );
    const locationParse = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    setIp(data.ip);
    setLocation(locationParse);
    setTimeZone(data.location.timezone);
    setIsp(data.isp);

    // Coordinate States
    setLat(data.location.lat);
    setLng(data.location.lng);

    // Marker data
    setData(data);
  };
  useEffect(() => {
    search();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    search();
  };

  const generateIp = () => {
    // 0-255
    const block1 = Math.floor(Math.random() * 256);
    const block2 = Math.floor(Math.random() * 256);
    const block3 = Math.floor(Math.random() * 256);
    const block4 = Math.floor(Math.random() * 256);
    const ip = `${block1}.${block2}.${block3}.${block4}`;

    setTerm(ip);
  };

  return (
    <div className="">
      <div className="container mx-auto relative">
        <h1 className="text-white text-2xl md:text-3xl text-center md:pt-5 pt-8 rubik">
          IP Address Tracker
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex h-10 justify-center md:mb-12 mb-8 mx-auto rubik text-xl tracking-wider"
        >
          <input
            className="md:w-4/12 md:text-xl text-base w-5/12 h-12 bg-white rounded-l-lg px-4"
            placeholder="Search for any IP address or domain"
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          ></input>
          <button
            className="md:w-2/12 w-3/12 h-12 bg-teal-500 p-1 leading-none md:text-lg text-base focus:outline-none active:bg-teal-400 activeshadow-inner border-2 border-teal-500"
            onClick={() => generateIp()}
          >
            Generate IP
          </button>
          <button
            className="md:w-12 w-2/12 h-12 bg-black text-white rounded-r-lg focus:outline-none active:bg-gray-700 activeshadow-inner border-2 border-teal-500"
            type="submit"
          >
            <svg
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="14"
            >
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </button>
        </form>
      </div>
      <InfoCard ip={ip} location={location} timeZone={timeZone} isp={isp} />
      <ReactMap lng={lng} lat={lat} data={data} />
    </div>
  );
};

export default SearchBar;
