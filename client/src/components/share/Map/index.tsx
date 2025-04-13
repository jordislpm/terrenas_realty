import React, { useEffect } from 'react';
import styles from "./map.module.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

const position: LatLngTuple = [51.505, -0.09];

const Map = () => {
  useEffect(() => {

    const container = document.querySelector('.leaflet-container') as any;
    if (container && container._leaflet_id != null) {
      container._leaflet_id = null;
    }
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className={styles.map}
      // style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>A pretty popup.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;