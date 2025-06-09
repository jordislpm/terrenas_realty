import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MapStateProps, Post } from 'types/types';

export const mapStore = create<MapStateProps>()(
  persist(
    (set) => ({
      isMarkerListingOpen: false,

      toggleIsMarkerListingOpen: () =>
        set((state) => ({
          isMarkerListingOpen: !state.isMarkerListingOpen,
        })),

      selectedMarketListing: {
        id: "0",
        title: '',
        price: 0,
        images: [],
        address: '',
        city: '',
        bedroom: 0,
        bathroom: 0,
        latitude: '',
        longitude: '',
        type: "rent",
        property: "apartment",
        createdAt: new Date(),
        userId: '',
      },

      setSelectedMarketListing: (property: Post) =>
        set(() => ({
          selectedMarketListing: { ...property },
        })),

      singleMarketListing: {
        id: "0",
        title: '',
        price: 0,
        images: [],
        address: '',
        city: '',
        bedroom: 0,
        bathroom: 0,
        latitude: '',
        longitude: '',
        type: "rent",
        property: "apartment",
        createdAt: new Date(),
        userId: '',
      },

      setSingleMarketListing: (property: Post) =>
        set(() => ({
          singleMarketListing: { ...property },
        })),
    }),
    {
      name: 'map-storage',
    }
  )
);