import React from 'react'
import styles from "./pin.module.scss"
import { Marker, Popup } from 'react-leaflet'
import { LatLngTuple } from 'leaflet';

const position: LatLngTuple = [51.505, -0.09];

function Pin() {
  return (
     <Marker position={position}>
            <Popup>A pretty popup.</Popup>
    </Marker>
  )
}

export default Pin