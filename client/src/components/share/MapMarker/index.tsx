import React, { useState } from 'react';
import styles from "./mapMarker.module.scss"
import { GoogleMap, useJsApiLoader, Marker, MarkerF, OverlayView } from '@react-google-maps/api';
import { PropertyType } from 'types/types';
import pin from "../../../assets/icons/pin.png"
import MarkerListingItem from '../MarkerListingItem';
import useMapGlobalState from 'hooks/globalState/useMapGlobalState';

interface MapMarkerProps {
    property: PropertyType
}


function MapMarker({ property }: MapMarkerProps) {


    const {
        isMarkerListingOpen,
         toggleIsMarkerListingOpen, 
         selectedMarketListing, 
         setSelectedMarketListing
        }= useMapGlobalState();





    const clickOnMarker = ()=>{

        if (isMarkerListingOpen){
            setSelectedMarketListing(property)
            toggleIsMarkerListingOpen()
            toggleIsMarkerListingOpen()
        } else {
            setSelectedMarketListing(property)
            toggleIsMarkerListingOpen()
        }
     

       console.log("click on marker")
       
    }



    const position =
    {
        lat: property.latitude,
        lng: property.longitude,
    }
    return (
        <div className={styles.body}>
            <MarkerF
                position={position}
                onClick={clickOnMarker}
                icon={{
                    url: pin,
                    scaledSize: {
                        width: 30,
                        height: 30
                    } as google.maps.Size
                }}>
                {isMarkerListingOpen &&
                    <OverlayView
                        position={{
                            lat: selectedMarketListing.latitude,
                            lng: selectedMarketListing.longitude,
                        }}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                            <MarkerListingItem item={selectedMarketListing} />
                    </OverlayView>}
            </MarkerF>
        </div>
    )


}

export default MapMarker