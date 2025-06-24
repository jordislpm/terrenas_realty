import React from "react";
import styles from "./mapMarker.module.scss";
import {
  MarkerF,
  OverlayView,
} from "@react-google-maps/api";
import { Post } from "types/types";
import pin from "../../../assets/icons/pin.png";
import MarkerListingItem from "../MarkerListingItem";
import useMapGlobalState from "hooks/globalState/useMapGlobalState";

interface MapMarkerProps {
  property: Post;
}

function MapMarker({ property }: MapMarkerProps) {
  const {
    isMarkerListingOpen,
    toggleIsMarkerListingOpen,
    selectedMarketListing,
    setSelectedMarketListing,
  } = useMapGlobalState();

  const position = {
    lat: parseFloat(property.latitude),
    lng: parseFloat(property.longitude),
  };

  const handleMarkerClick = () => {
    if (selectedMarketListing?.id === property.id && isMarkerListingOpen) {
      toggleIsMarkerListingOpen(); // close it
      return;
    }

    setSelectedMarketListing(property);

    if (!isMarkerListingOpen) {
      toggleIsMarkerListingOpen(); // open it
    }
  };

  const isActive =
    isMarkerListingOpen &&
    selectedMarketListing?.id === property.id &&
    selectedMarketListing.latitude &&
    selectedMarketListing.longitude;

  return (
    <div className={styles.body}>
      <MarkerF
        position={position}
        onClick={handleMarkerClick}
        icon={{
          url: pin,
          scaledSize: {
            width: 30,
            height: 30,
          } as google.maps.Size,
        }}
      />

      {isActive && (
        <OverlayView
          position={{
            lat: parseFloat(selectedMarketListing.latitude),
            lng: parseFloat(selectedMarketListing.longitude),
          }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <MarkerListingItem item={selectedMarketListing} />
        </OverlayView>
      )}
    </div>
  );
}

export default MapMarker;