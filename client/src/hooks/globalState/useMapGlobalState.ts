import { MapStore } from "global/map";

const useMapGlobalState = ()=>{
const isMarkerListingOpen = MapStore((state)=> state.isMarkerListingOpen)
const toggleIsMarkerListingOpen = MapStore((state)=> state.toggleIsMarkerListingOpen)
const selectedMarketListing = MapStore((state)=> state.selectedMarketListing)
const setSelectedMarketListing = MapStore((state)=> state.setSelectedMarketListing)


    return{
isMarkerListingOpen,
toggleIsMarkerListingOpen,
selectedMarketListing,
setSelectedMarketListing,
    }
}


export default useMapGlobalState;