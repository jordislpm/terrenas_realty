import React, { useState, useCallback, useEffect } from 'react';
import styles from "./googleMapComponent.module.scss";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { PropertyType } from 'types/types';
import MapMarker from '../MapMarker';

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: 10
};

interface MapProps {
    mapaData: PropertyType[];
}

function GoogleMapComponent({ mapaData }: MapProps) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "", // 🔒 Reemplaza esto por tu API Key
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [center, setCenter] = useState<google.maps.LatLngLiteral>({
        lat: 19.312346,
        lng: -69.542513,
    });

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        const bounds = new window.google.maps.LatLngBounds();
        mapaData.forEach(marker => {
            const position = new window.google.maps.LatLng(marker.latitude, marker.longitude);
            bounds.extend(position); // Add the marker's position to the bounds
        });

        map.fitBounds(bounds); // Adjust map to fit the bounds of all markers
        setMap(map);
    }, [mapaData]);

    const onUnmount = useCallback(function callback(map: google.maps.Map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}  // Set an appropriate zoom level
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{ mapTypeControl: false }}
        >
            {mapaData.map((marker) => (
                <MapMarker key={`marker of property:${marker.id}`} property={marker} />
            ))}
        </GoogleMap>
    ) : (
        <div>Loading map...</div>
    );
}

export default GoogleMapComponent;