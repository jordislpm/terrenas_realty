import { mapStore } from "global/map";

const usemapGlobalState = ()=>{
const isMarkerListingOpen = mapStore((state)=> state.isMarkerListingOpen)
const toggleIsMarkerListingOpen = mapStore((state)=> state.toggleIsMarkerListingOpen)
const selectedMarketListing = mapStore((state)=> state.selectedMarketListing)
const setSelectedMarketListing = mapStore((state)=> state.setSelectedMarketListing)
const singleMarketListing = mapStore((state)=> state.singleMarketListing)
const setSingleMarketListing = mapStore((state)=> state.setSingleMarketListing)


    return{
isMarkerListingOpen,
toggleIsMarkerListingOpen,
selectedMarketListing,
setSelectedMarketListing,
singleMarketListing,
setSingleMarketListing
    }
}


export default usemapGlobalState;