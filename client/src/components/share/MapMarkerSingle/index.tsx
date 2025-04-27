import React, { useState } from 'react';
import styles from "./mapMarkerSingle.module.scss"
import { GoogleMap, useJsApiLoader, Marker, MarkerF, OverlayView } from '@react-google-maps/api';
import { PostDataType, PropertyType } from 'types/types';
import pin from "../../../assets/icons/pin.png"
import MarkerListingItem from '../MarkerListingItem';
import useMapGlobalState from 'hooks/globalState/useMapGlobalState';

interface MapMarkerProps {
    property: PostDataType;
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
                toggleIsMarkerListingOpen()
            } else {
                setSingleMarketListing(property)
                toggleIsMarkerListingOpen()
            }
           
        }

console.log("marker single")

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
                            lat: singleMarketListing.latitude,
                            lng: singleMarketListing.longitude,
                        }}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                            <MarkerListingItem itemSingle={property} />
                    </OverlayView>}
            </MarkerF>
        </div>
    )


}

export default MapMarkerSingle