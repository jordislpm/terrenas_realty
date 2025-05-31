import { Router } from "express";
import routerAdmin from "../test/admin";



const chatRoutes: Router = Router();
chatRoutes.use(routerAdmin);


export default chatRoutes;