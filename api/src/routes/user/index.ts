import { Router } from "express";
import getUser from "./user";
import getUsers from "./users";
import updateUser from "./update";
import deleteUser from "./detele";
import savePost from "./save";


const userRoutes: Router = Router();

userRoutes.use(getUser, getUsers, updateUser, deleteUser, savePost);


export default userRoutes;