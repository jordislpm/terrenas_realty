import { Router } from "express";
import routerAdmin from "./admin";
import routerLoggedIn from "./logged";


const testRoutes: Router = Router();
testRoutes.use("/admin", routerAdmin);
testRoutes.use("/logged", routerLoggedIn);

export default testRoutes;