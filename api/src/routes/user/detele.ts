import { createUserDTO, updateUserDTO, loginUserDTO } from "../../entities/user/user.dto";

import { Request, Response, Router } from "express";
import { userInfo } from "os";
import { loginUser } from "src/business-logic/auth/login";
import { verifyToken } from "src/middleware/verifyToken";

const deleteUser: Router = Router();

deleteUser.delete("/:id", verifyToken, async (req: Request, res: Response) => {
    try {
   
  } catch (error) {

    console.error("Error:", error);
    res.status(500).json({ error: `Failed to get Users: ${error}` });
  }
});

export default deleteUser;