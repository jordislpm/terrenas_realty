import { Request, Response, Router } from "express";
import { verifyToken } from "src/middleware/verifyToken";
import { addNewMessage, createNewPost, updateOnePost} from 'src/business-logic';
import { createPostDTO } from "src/entities";

const addMessage: Router = Router();

addMessage.post("/",verifyToken,  async (req: Request, res: Response) => {

  const id=req.params.id;
  const tokenUserId = req.userId;
  const body: createPostDTO = req.body;

  console.log(id, tokenUserId)

  if (id !== tokenUserId){
   res.status(403).json({Message: "Not Authorized"});
  }

  try {

    if (!id){
       res.status(403).json({Message: "id is not valid!"});
    } else {
    const post = await addNewMessage(id)

    res.status(200).json(post);    }

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to add message: ${error}` });
  }
});

export default addMessage;