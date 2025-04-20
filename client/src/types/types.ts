
export type QueryStateType = {
  type: "buy" | "rent"; // Adjust based on possible values
  location: string | null;
  minPrice: number;
  maxPrice: number;
};


export type UserType = {
    id: number;
    name: string;
    img: string;
  };

  export type PropertyType = {
    id: number;
    title: string;
    img: string;
    bedroom: number;
    bathroom: number;
    price: number;
    address: string;
    latitude: number;
    longitude: number;
  };


  // types for global Context

  export type MapStateProps = {
    isMarkerListingOpen: boolean,
    toggleIsMarkerListingOpen: () => void;
    selectedMarketListing: PropertyType;
    setSelectedMarketListing:  (property: PropertyType) => void;
  }



