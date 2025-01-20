import { Router } from "express";
import routerCreate from "./create";
import routeLogin from "./login";


const authRoutes: Router = Router();
authRoutes.use(routerCreate, routeLogin);

export default authRoutes;