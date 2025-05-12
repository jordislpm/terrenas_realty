import { Router } from "express";
import authRoutes from "./auth";
import testRoutes from "./test";


const apiRoutes: Router = Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/test", testRoutes);


export default apiRoutes;