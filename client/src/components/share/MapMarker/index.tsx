import React, { useState } from 'react';
import styles from "./mapMarker.module.scss"
import { GoogleMap, useJsApiLoader, Marker, MarkerF, OverlayView } from '@react-google-maps/api';
import { PropertyType } from 'types/types';
import pin from "../../../assets/icons/pin.png"
import MarkerListingItem from '../MarkerListingItem';

interface MapMarkerProps {
    property: PropertyType
}


function MapMarker({ property }: MapMarkerProps) {


    const [selectedListing, setSelectedListing] = useState<PropertyType>();

    const { latitude, longitude } = property;



    const position =
    {
        lat: latitude,
        lng: longitude,
    }
    return (
        <div className={styles.body}>
            <MarkerF
                position={position}
                onClick={() => setSelectedListing(property)}
                icon={{
                    url: pin,
                    scaledSize: {
                        width: 40,
                        height: 40
                    } as google.maps.Size
                }}>
                {selectedListing &&
                    <OverlayView
                        position={{
                            lat: selectedListing.latitude,
                            lng: selectedListing.longitude,
                        }}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                            <MarkerListingItem item={selectedListing} />
                    </OverlayView>}

            </MarkerF>
        </div>
    )


}

export default MapMarker