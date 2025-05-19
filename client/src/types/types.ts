// Query params for filtering properties
export type QueryStateType = {
  type: "buy" | "rent";
  location: string | null;
  minPrice: number;
  maxPrice: number;
};

// Basic user info (e.g., for UI display)
export type UserType = {
  id: string;
  username: string;
  avatar?: string | null;
};

// Simplified property info (e.g., for marker listing)
export type PropertyType = {
  id: string;
  title: string;
  img: string;
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
};

// Full post details
export type PostDataType = {
  id: string;
  title: string;
  price: number;
  images: string[];
  bedroom: number;
  bathroom: number;
  size?: number;
  latitude: number;
  longitude: number;
  city: string;
  address: string;
  school?: number | null;
  bus?: number | null;
  restaurant?: number | null;
  description: string;
  type: "buy" | "rent";
  property: "apartment" | "house" | "condo" | "land";
  createdAt: Date;
};

// Full user data for profile views or display
export type UserDataType = {
  id: string;
  username: string;
  email: string;
  avatar?: string | null;
};

// Global context for map state
export type MapStateProps = {
  isMarkerListingOpen: boolean;
  toggleIsMarkerListingOpen: () => void;
  selectedMarketListing: PropertyType;
  setSelectedMarketListing: (property: PropertyType) => void;
  singleMarketListing: PostDataType;
  setSingleMarketListing: (property: PostDataType) => void;
};

// Global context for user auth state
export type UserStateProps = {
  user: UserFromServerType | null;
  setUser: (user: UserFromServerType | null) => void;
};

// Raw user from backend (used internally, not in UI)
export type UserFromServerType = {
  id: string;
  username: string;
  email: string;
  avatar: string;
  createdAt: Date;
  password?: string;
};

// DTOs for API interaction
export type RegisterUserDTO = {
  username: string;
  email: string;
  password: string;
  avatar?: string | null;
};

export type UpdateUserDTO = {
  username?: string;
  email?: string;
  password?: string;
  avatar?: string | null;
};

export type LoginUserDTO = {
  username: string;
  password: string;
};