import { Router } from "express";
import routerAdmin from "../test/admin";



const messageRoutes: Router = Router();
messageRoutes.use(routerAdmin);


export default messageRoutes;