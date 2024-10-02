import { createUserDTO } from './../../entities/user/user.dto';
import { Post } from './../../entities/post/post/post';
import { Request, Response, Router } from "express"
import { createUser } from 'src/business-logic/user/create';


const router = Router();

export const createUserRoute = ()=>{
router.post("user", async (req: Request, res: Response) =>{
const {body}= req;
const user = body as createUserDTO;
try{
    const newUser = await createUser(user);
    res.status(200).json({ message: "user Created", data: newUser });
} catch(error){
    console.error("Error:", error);
    res.status(500).json({ error: "Error in server, created user failed" });
}
})
}