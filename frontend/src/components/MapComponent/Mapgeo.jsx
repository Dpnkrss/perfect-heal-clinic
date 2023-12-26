// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// Import marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

// eslint-disable-next-line react/prop-types
const Mapgeo = ({ center, zoom }) => {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });

  const markerRef = useRef(null);

  useEffect(() => {
    // Add a timeout to ensure the map and marker are fully loaded
    const timer = setTimeout(() => {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    }, 1000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} ref={markerRef}>
        <Popup>
          <div className="text-red-500 font-bold text-lg">
            Perfect Heal Ortho <br /> and General Clinic.
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapgeo;
