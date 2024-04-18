"use client";

import {MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import {useEffect} from "react";

export default function Map({longitude, latitude}: {longitude: number; latitude: number}) {
  const RecenterAutomatically = ({longitude, latitude}: {longitude: number; latitude: number}) => {
    const map = useMap();

    useEffect(() => {
      map.setView([longitude, latitude]);
    }, [longitude, latitude]);

    return null;
  };

  return (
    <MapContainer
      center={[longitude, latitude]}
      scrollWheelZoom={true}
      style={{height: "100%", width: "100%"}}
      zoom={20}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker draggable={true} position={[longitude, latitude]}>
        <Popup>Hey ! you found me</Popup>
        <RecenterAutomatically latitude={latitude} longitude={longitude} />
      </Marker>
    </MapContainer>
  );
}
