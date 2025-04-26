import React, { useState, useCallback } from 'react';
import styles from "./googleMapComponent.module.scss";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { PostDataType, PropertyType } from 'types/types';
import MapMarker from '../MapMarker';
import chatIcon from "./../../../assets/icons/chat.png"
import saveIcon from "./../../../assets/icons/save.png"

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 10,
};

interface MapProps {
  mapaData?: PropertyType[];
  singleMapaData?: PostDataType;
}

function GoogleMapComponent({ mapaData, singleMapaData }: MapProps) {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const center = { lat: 19.312346, lng: -69.542513 };

  const onLoad = useCallback((map: google.maps.Map) => {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
  }, [center]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapTypeControl: false }}
    >
      {mapaData?.map((marker) => (
        <MapMarker key={`marker-${marker.id}`} property={marker} />
      ))}
    </GoogleMap>
  );
}

export default GoogleMapComponent;