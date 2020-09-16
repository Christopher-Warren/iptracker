import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import Footer from "./Footer";

const blackMarker = new Icon({
  iconUrl: "/images/icon-location.svg",
  iconSize: [40, 50],
});

const ReactMap = ({ lat, lng, data }) => {
  const [active, setActive] = useState(null);

  if (!lat || !lng) return null;
  else {
    return (
      <div className="absolute w-full -z-10 md:my-6 -mt-24 mb-10">
        <Map
          className="w-full md:h-full h-perc"
          center={[lat, lng]}
          zoom={13}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={[lat, lng]}
            icon={blackMarker}
            onclick={() => setActive(data)}
          />
          {active && (
            <Popup position={[lat, lng]} onClose={() => setActive(null)}>
              <div className="text-center">
                <div>ISP: {data.isp}</div>
                <div>DOMAIN: {!data.domains ? "N/A" : data.domains[0]}</div>
              </div>
            </Popup>
          )}
        </Map>
        <Footer />
      </div>
    );
  }
};

export default ReactMap;
