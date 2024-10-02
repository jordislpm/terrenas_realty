import { User } from "./user";

export type createUserDTO = Omit<User, "id">
export type updateUserDTO = Partial<User>