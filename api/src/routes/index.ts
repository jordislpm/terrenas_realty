import { Router } from "express";
import authRoutes from "./auth";



const apiRoutes= (router:Router)=>{
    console.log("si entro")
    router.use("/api/auth", authRoutes);
}

export default apiRoutes;