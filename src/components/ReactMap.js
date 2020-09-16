import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, control } from "leaflet";
import "leaflet/dist/leaflet.css";

const blackMarker = new Icon({
  iconUrl: "/images/icon-location.svg",
  iconSize: [40, 50],
});

const ReactMap = ({ lat, lng, data }) => {
  const [active, setActive] = useState(null);

  if (!lat || !lng) return null;
  else {
    return (
      <div className="absolute w-full md:h-full -z-10 md:my-6 -mt-24">
        <Map
          className="w-full md:h-full h-perc"
          center={[lat, lng]}
          zoom={12}
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
      </div>
    );
  }
};

export default ReactMap;
