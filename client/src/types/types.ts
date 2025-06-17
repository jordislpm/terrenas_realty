import { Socket } from "socket.io-client";

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

export type PostFromServer = {
  id: string;
  title: string;
  price: number;
  images: string[];
  address: string;
  city: string;
  bedroom: number;
  bathroom: number;
  latitude: number;
  longitude: number;
  type: "buy" | "rent";
  property: "apartment" | "house" | "condo" | "land";
  createdAt: string;
  userId: string;
};

// Full user data for profile views or display
export type UserDataType = {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  createdAt?: Date;
};

// ===============================
// Enums (usados también en Prisma)
// ===============================
export type PostType = "buy" | "rent";
export type PropertyType = "apartment" | "house" | "condo" | "land";

// ===============================
// Basic User Info
// ===============================
export type UserType = {
  id?: string;
  email?: string;
  username: string;
  avatar?: string;
  createdAt?: Date;
};

// ===============================
// Auth DTOs
// ===============================
export type RegisterUserDTO = {
  username: string;
  email: string;
  password: string;
  avatar?: string | null;
};

export type UpdateUserDTO = Partial<RegisterUserDTO>;

export type LoginUserDTO = {
  username: string;
  password: string;
};

export type UserInfo = {
  username: string;
  avatar: string;
};

// ===============================
// Post Detail Types
// ===============================
export type PostDetail = {
  id: string;
  desc: string;
  utilities?: string | null;
  pet?: string | null;
  income?: string | null;
  size?: number | null;
  school?: number | null;
  bus?: number | null;
  restaurant?: number | null;
  postId: string;
};

export type CreatePostDetailDTO = Omit<PostDetail, "id">;
export type UpdatePostDetailDTO = Partial<CreatePostDetailDTO>;

// ===============================
// Post Types
// ===============================
export type Post = {
  id: string;
  title: string;
  price: number;
  images: string[];
  address: string;
  city: string;
  bedroom: number;
  bathroom: number;
  latitude: string;
  longitude: string;
  type: PostType;
  property: PropertyType;
  createdAt: Date;
  userId: string;
  postDetail?: PostDetail;
};

export type CreatePostDTO = {
  postData: Omit<Post, "id" | "createdAt" | "userId" | "postDetail">;
  postDetail?: Omit<PostDetail, "id" | "postId">;
};

export type UpdatePostDTO = {
  postData?: Partial<Omit<Post, "createdAt" | "userId" | "postDetail">>;
  postDetail?: Partial<Omit<PostDetail, "id" | "postId">>;
};

// ===============================
// Saved Post
// ===============================
export type SavedPost = {
  id: string;
  userId: string;
  postId: string;
  createdAt: Date;
};

export type SavedPostDTO = Omit<SavedPost, "id">;
export type UpdateSavedDTO = Partial<SavedPostDTO>;

// ===============================
// Full Post (con user y detail)
// ===============================
export type FullPost = Post & {
  postDetail?: PostDetail;
  user?: UserType;
  isSaved: boolean;
};

export type AllProfilePosts = {
  userPosts: FullPost[];
  savedPosts: FullPost[];
};

// ===============================
// Map + Marker Listing Context
// ===============================
export type MarkerListing = {
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

export type MapStateProps = {
  isMarkerListingOpen: boolean;
  toggleIsMarkerListingOpen: () => void;
  selectedMarketListing: Post;
  setSelectedMarketListing: (property: Post) => void;
  singleMarketListing: Post;
  setSingleMarketListing: (property: Post) => void;
};

// ===============================
// User Global Context
// ===============================
export type UserStateProps = {
  user: UserFromServerType | null;
  setUser: (user: UserFromServerType | null) => void;
};

// ===============================
// Socket Global Context
// ===============================

export type SocketStoreProps = {
  socket: Socket | null;
  connect: () => void;
  disconnect: () => void;
};

// ===============================
// Notification Global Context
// ===============================

export type NotificationStoreProps = {
  number: number;
  fetchNotification: () => void;
  decrease: () => void;
  reset: () => void;
};

// ===============================
// Notification Global Context
// ===============================

export type ChatsStoreProps = {
  chatsGlobal: Chat[];
  updateChatsGlobal: (newChats: Chat[] | null) => void;
};

// ===============================
// Chat Types
// ===============================
export type Chat = {
  id: string;
  userIDs: string[];
  users?: UserType[];
  createdAt: Date;
  seenBy?: string[];
  messages?: Message[];
  lastMessage?: string | null;
  receiver?: UserType;
};

export type CreateChatDTO = Omit<
  Chat,
  "id" | "users" | "messages" | "lastMessage"
>;

// ===============================
// Message
// ===============================
export type Message = {
  id: string;
  text: string;
  userId: string;
  chatId: string;
  createdAt: Date;
};

// ===============================
// Query Params (ej. filtros de búsqueda)
// ===============================
export type QueryStateType = {
  type: PostType;
  location: string | null;
  minPrice: number;
  maxPrice: number;
};

export type UserFromServerType = {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  password?: string;
};
