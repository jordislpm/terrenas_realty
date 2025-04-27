import { MapStore } from "global/map";

const useMapGlobalState = ()=>{
const isMarkerListingOpen = MapStore((state)=> state.isMarkerListingOpen)
const toggleIsMarkerListingOpen = MapStore((state)=> state.toggleIsMarkerListingOpen)
const selectedMarketListing = MapStore((state)=> state.selectedMarketListing)
const setSelectedMarketListing = MapStore((state)=> state.setSelectedMarketListing)
const singleMarketListing = MapStore((state)=> state.singleMarketListing)
const setSingleMarketListing = MapStore((state)=> state.setSingleMarketListing)


    return{
isMarkerListingOpen,
toggleIsMarkerListingOpen,
selectedMarketListing,
setSelectedMarketListing,
singleMarketListing,
setSingleMarketListing
    }
}


export default useMapGlobalState;