import { Router } from "express";
import getPost from "./post";
import deletePost from "./detele";
import updatePost from "./update";
import getPosts from "./posts";


const postRoutes: Router = Router();

postRoutes.use(getPost, getPosts, deletePost, updatePost);


export default postRoutes;