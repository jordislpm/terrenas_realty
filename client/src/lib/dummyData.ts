import { Agent, CreatePostDetailDTO, Post } from "types/types";


import male1 from "../assets/avatars/male1.jpeg"
import male2 from "../assets/avatars/male2.jpg"
import female1 from "../assets/avatars/female1.jpg"
import female2 from "../assets/avatars/female2.jpg"
import jordisAvatar from "../assets/avatars/jordis.jpg"

export const listData: Post[] = [
  {
    id: "6833b6dccc446193b11b4796",
    title: "Modern apartment steps from Playa Punta Popy",
    price: 185000,
    images: [
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
      "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg",
      "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg",
      "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg",
    ],
    address: "Calle Italia, Playa Popy",
    city: "Las Terrenas",
    bedroom: 2,
    bathroom: 2,
    latitude: "19.317652",
    longitude: "-69.539092",
    type: "buy",
    property: "apartment",
    createdAt: new Date(),
    userId: "682b799c140012f9296eae1c",
    postDetail: {
      id: "682d0b6bf9bff88547c95fa4",
      desc: "Modern apartment just a 3-minute walk from Playa Punta Popy, with luxury finishes and 24/7 security.",
      utilities: "Includes maintenance and water",
      pet: "Allowed",
      income: "Income verification required",
      size: 90,
      school: 2,
      bus: 1,
      restaurant: 5,
      postId: "682d0b6bf9bff88547c95fa3"
    }
  },
  {
    id: "6833b6dccc446193b11b4796",
    title: "Cozy apartment near Pueblo de los Pescadores",
    price: 850,
    images: [
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
    ],
    address: "Calle Carmen, Pueblo de los Pescadores",
    city: "Las Terrenas",
    bedroom: 1,
    bathroom: 1,
    latitude: "19.311950",
    longitude: "-69.540182",
    type: "rent",
    property: "apartment",
    createdAt: new Date(),
    userId: "user-1",
  },
  {
    id: "6833b6dccc446193b11b4796",
    title: "Spacious house with garden in Bonita Village",
    price: 320000,
    images: [
      "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg",
      "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg",
      "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg",
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
    ],
    address: "Bonita Village Residence, Playa Bonita",
    city: "Las Terrenas",
    bedroom: 3,
    bathroom: 2,
    latitude: "19.305642",
    longitude: "-69.566432",
    type: "buy",
    property: "house",
    createdAt: new Date(),
    userId: "user-2",
  },
];

export const agents:Agent[] = [
  {
    name: "Jordis De Peña",
    photo: jordisAvatar, // Feel free to update the photo path
    languages: ["Spanish", "English"],
    bio: "Dedicated to helping families and expats find cozy homes and investment properties near the best beaches in Las Terrenas. Known for clear communication and reliable support.",
    contact: "jordis@lasterrenasrealty.com"
  },
  {
    name: "María Rodríguez",
    photo: female1,
    languages: ["Spanish", "English", "French"],
    bio: "Expert in luxury rentals and vacation villas. María has helped hundreds of international clients settle in the Dominican Republic with professionalism and warmth.",
    contact: "maria@lasterrenasrealty.com"
  },
  {
    name: "Carlos Mejía",
    photo: male2,
    languages: ["Spanish"],
    bio: "Local market expert with deep knowledge of commercial properties and undeveloped land opportunities. Carlos specializes in helping entrepreneurs and builders find ideal locations.",
    contact: "carlos@lasterrenasrealty.com"
  },
  {
    name: "Emma Dubois",
    photo: female2,
    languages: ["French", "English"],
    bio: "Originally from France, Emma assists newcomers looking to invest or relocate in Las Terrenas. Her focus is beachfront condos and gated community homes.",
    contact: "emma@lasterrenasrealty.com"
  }
];