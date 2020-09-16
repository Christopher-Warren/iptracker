import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

const coord = {
  lat: "35.2031",
  lng: "-85.2536",
};
const ReactMap = ({ lat, lng }) => {
  if (!lat || !lng) return null;
  else {
    return (
      <div className="">
        <Map className="w-full h-screen" center={[lat, lng]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, lng]} />
        </Map>
      </div>
    );
  }
};

export default ReactMap;
