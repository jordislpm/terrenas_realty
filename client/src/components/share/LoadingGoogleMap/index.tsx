import React, { useState, useCallback, use, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { FullPost, Post, PostDataType, PropertyType } from 'types/types';
import MapMarker from '../MapMarker';
import MapMarkerSingle from '../MapMarkerSingle';
import useMapGlobalState from 'hooks/globalState/useMapGlobalState';


const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 10,
};

interface MapProps {
  mapaDataPromise?: Promise<FullPost[]>;
  singleMapaData?: Post;
}

function LoadingGoogleMap() {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey,
  });


  const { isMarkerListingOpen, toggleIsMarkerListingOpen } = useMapGlobalState();
  const [mapState, setMapState] = useState(
    {
      center: { lat: 19.312346, lng: -69.542513 },
      zoom: 13
    }
  )

  const [map, setMap] = useState<google.maps.Map | null>(null);



  const onLoad = useCallback((map: google.maps.Map) => {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
  }, [mapState]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapState.center}
      zoom={mapState.zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapTypeControl: false }}
    >
    

    </GoogleMap>
  );
}

export default LoadingGoogleMap;