import { Router } from "express";
import userRoutes from "./user";


const apiRoutes= (router:Router)=>{
    router.use("api/v1", userRoutes);
}