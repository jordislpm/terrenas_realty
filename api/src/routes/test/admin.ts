import { Request, Response, Router } from "express";
import { shouldBeAdmin } from "src/business-logic/test/admin";

const routerAdmin: Router = Router();

routerAdmin.get("/should-be-admin", async (req: Request, res: Response) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  try {
    const userValidated = await shouldBeAdmin(token);
    return res.status(200).json(userValidated);
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(403)
      .json({ error: `Error in server, admin not validated: ${error}` });
  }
});

export default routerAdmin;