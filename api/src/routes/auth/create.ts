import { createUserDTO } from "./../../entities/user/user.dto";
import { Request, Response, Router } from "express";
import { registerNewUser } from '../../business-logic/auth/register';

const router: Router = Router();

router.post("/auth/register", async (req: Request, res: Response) => {
  const { body } = req;
  const user = body as createUserDTO;
  try {
    const newUser = await registerNewUser(user);
    res.status(200).json({ message: "user Created", data: newUser });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error in server, created user failed" });
  }
});

export default router;