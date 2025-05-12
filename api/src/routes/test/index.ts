import { Router } from "express";
import routerAdmin from "./admin";
import routerLoggedIn from "./logged";


const testRoutes: Router = Router();
testRoutes.use(routerAdmin);
testRoutes.use(routerLoggedIn);

export default testRoutes;