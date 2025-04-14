import React from 'react';
import styles from "./mapMarker.module.scss"
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { PropertyType } from 'types/types';

interface MapMarkerProps {
    property : PropertyType
}


function MapMarker({property:{latitude, longitude}}:MapMarkerProps) {




      const position =
            {
                lat: latitude,
                lng: longitude,
            }
    return (
        <Marker position={position}>

        </Marker>
    )
}

export default MapMarker