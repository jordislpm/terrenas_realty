import { Request, Response, Router } from "express";


const routerLogout: Router = Router();

routerLogout.post("/auth/logout", async (req: Request, res: Response) => {
    res
    .clearCookie("token")
    .status(200)
    .json({message: "Logout Successful"})
});
export default routerLogout;