import { createUserDTO, updateUserDTO, loginUserDTO } from "./../../entities/user/user.dto";

import { Request, Response, Router } from "express";
import { loginUser } from "src/business-logic/auth/login";

const routerLogin: Router = Router();

routerLogin.post("/auth/login", async (req: Request, res: Response) => {
  const { body } = req;
  const user = body as loginUserDTO;
  try {
    const userValidated = await loginUser(user);
    const {token, age} = userValidated

    res
    .cookie("token", token,{
        httpOnly:true,
        //secure:true  this line is mandatory in production
        maxAge: age
    })
    .status(200)
    .json({message: "Login Successful"})
  } catch (error) {

    console.error("Error:", error);
    res.status(500).json({ error: "Error in server, user not validated" });
  }
});

export default routerLogin;