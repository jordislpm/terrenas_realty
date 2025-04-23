
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


  export type PostDataType = {
    id: number;
    title: string;
    price: number;
    images: string[];
    bedRooms: number;
    bathroom: number;
    size: number;
    latitude: number;
    longitude: number;
    city: string;
    address: string;
    school: string;
    bus: string;
    restaurant: string;
    description: string;
  };
  
  export type UserDataType = {
    id: number;
    name: string;
    img: string;
  };


  // types for global Context

  export type MapStateProps = {
    isMarkerListingOpen: boolean,
    toggleIsMarkerListingOpen: () => void;
    selectedMarketListing: PropertyType;
    setSelectedMarketListing:  (property: PropertyType) => void;
  }



