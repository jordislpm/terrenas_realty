import { MapStateProps, PostDataType, PropertyType } from 'types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const MapStore = create<MapStateProps>()(
  persist(
    (set) => ({
      isMarkerListingOpen: false,

      toggleIsMarkerListingOpen: () =>
        set((state) => ({
          isMarkerListingOpen: !state.isMarkerListingOpen,
        })),

      selectedMarketListing: {
        id: 0,
        title: '',
        img: '',
        bedroom: 0,
        bathroom: 0,
        price: 0,
        address: '',
        latitude: 0,
        longitude: 0,
      } as PropertyType,

      setSelectedMarketListing: (property: PropertyType) =>
        set(() => ({
          selectedMarketListing: { ...property },
        })),

      singleMarketListing: {
        id: 0,
        title: '',
        price: 0,
        images: [],
        bedRoom: 0,
        bathroom: 0,
        size: 0,
        latitude: 0,
        longitude: 0,
        city: '',
        address: '',
        school: '',
        bus: '',
        restaurant: '',
        description: '',
      } as PostDataType,

      setSingleMarketListing: (property: PostDataType) =>
        set(() => ({
            singleMarketListing: { ...property },
        })),
    }),
    {
      name: 'map-storage',
    }
  )
);