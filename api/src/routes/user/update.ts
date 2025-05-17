import { createUserDTO, updateUserDTO, loginUserDTO } from "../../entities/user/user.dto";

import { Request, Response, Router } from "express";
import { userInfo } from "os";
import { loginUser } from "src/business-logic/auth/login";

const updateUser: Router = Router();

updateUser.put("/:id", async (req: Request, res: Response) => {
  const { body } = req;
  const userToLogin = body as loginUserDTO;
  try {
    const userValidated = await loginUser(userToLogin);
    const {token, age, user} = userValidated

  const {password,...userInfo}= user;


    res
    .cookie("token", token,{
        httpOnly:true,
        //secure:true  this line is mandatory in production
        maxAge: age
    })
    .status(200)
    .json(userInfo)
  } catch (error) {

    console.error("Error:", error);
    res.status(500).json({ error: `Error in server, user not validated: ${error}` });
  }
});

export default updateUser;