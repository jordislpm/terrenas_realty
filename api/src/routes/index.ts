import { Router } from "express";
import authRoutes from "./auth";
import testRoutes from "./test";
import userRoutes from "./user";


const apiRoutes: Router = Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/test", testRoutes);
apiRoutes.use("/user", userRoutes);


export default apiRoutes;