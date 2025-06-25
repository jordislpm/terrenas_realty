import React, { useState } from 'react';
import styles from "./mapMarkerSingle.module.scss"
import { GoogleMap, useJsApiLoader, Marker, MarkerF, OverlayView } from '@react-google-maps/api';
import { Post, PostDataType, PropertyType } from 'types/types';
import pin from "../../../assets/icons/pin.png"
import MarkerListingItem from '../MarkerListingItem';
import useMapGlobalState from 'hooks/globalState/useMapGlobalState';
import map_marker from "../../../assets/icons/map-marker.png"

interface MapMarkerProps {
    property: Post
}


function MapMarkerSingle({ property }: MapMarkerProps) {

    const [oneMarker, setOneMarker] = useState<PostDataType>()


    const {
        isMarkerListingOpen,
         toggleIsMarkerListingOpen, 
         selectedMarketListing, 
         setSelectedMarketListing,
         singleMarketListing,
         setSingleMarketListing
         
        }= useMapGlobalState();

        const clickOnMarker = ()=>{

            if (isMarkerListingOpen){
                setSingleMarketListing(property)
                toggleIsMarkerListingOpen()
            } else {
                setSingleMarketListing(property)
                toggleIsMarkerListingOpen()
            }
           
        }

   const position =
    {
        lat: parseFloat(property.latitude),
        lng: parseFloat(property.longitude)
    } 
    return (
        <div className={styles.body}>
            <MarkerF
                position={position}
                onClick={clickOnMarker}
                icon={{
                    url: map_marker,
                    scaledSize: {
                        width: 30,
                        height: 30
                    } as google.maps.Size
                }}>
                {isMarkerListingOpen &&
                    <OverlayView
                        position={{
                            lat: parseFloat(property.latitude),
                            lng: parseFloat(property.longitude)
                        }}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                            <MarkerListingItem itemSingle={property} />
                    </OverlayView>}
            </MarkerF>
        </div>
    )


}

export default MapMarkerSingle