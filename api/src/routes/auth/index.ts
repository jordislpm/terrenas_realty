import { Router } from "express";
import { createUserRoute } from "./create";

const authRoutes: Router = Router();
authRoutes.use(createUserRoute);

export default authRoutes;