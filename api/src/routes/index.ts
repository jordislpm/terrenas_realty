import { Router } from "express";
import authRoutes from "./auth";
import testRoutes from "./test";
import userRoutes from "./user";
import postRoutes from "./post";


const apiRoutes: Router = Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/test", testRoutes);
apiRoutes.use("/user", userRoutes);
apiRoutes.use("/post", postRoutes);


export default apiRoutes;