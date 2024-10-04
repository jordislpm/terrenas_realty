import { Router } from "express";
import routes from "./create";

const authRoutes: Router = Router();
authRoutes.use(routes);

export default authRoutes;