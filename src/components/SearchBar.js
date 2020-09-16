import React, { useState, useEffect } from "react";
import axios from "axios";
import InfoCard from "./InfoCard";
import ReactMap from "./ReactMap";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  // Send to InfoCard
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");

  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);

  const search = async () => {
    const { data } = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=at_sQEluxF2daTNMRGHr0VyZi3ucwyMh&ipAddress=${term}`
    );
    const locationParse = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    setIp(data.ip);
    setLocation(locationParse);
    setTimeZone(data.location.timezone);
    setIsp(data.isp);

    // Coordinate States
    setLat(data.location.lat);
    setLng(data.location.lng);
  };
  useEffect(() => {
    search();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    search();
  };

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-white text-2xl md:text-3xl text-center pt-5 pb-5 rubik">
          IP Address Tracker
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex h-10 justify-center md:mb-12 mb-8 mx-auto rubik text-xl tracking-wider"
        >
          <input
            className="md:w-4/12 w-8/12 h-12 bg-white rounded-l-lg px-4"
            placeholder="Search for any IP address or domain"
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          ></input>
          <button
            className="md:w-12 w-2/12 h-12 bg-black text-white rounded-r-lg focus:bg-gray-700"
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
      <ReactMap lng={lng} lat={lat} />
    </div>
  );
};

export default SearchBar;
