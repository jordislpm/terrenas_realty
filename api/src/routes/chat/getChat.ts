import { Request, Response, Router } from "express";
import { verifyToken } from "src/middleware/verifyToken";
import { createNewPost, updateOnePost} from 'src/business-logic';
import { createPostDTO } from "src/entities";
import { getOnechat } from "src/business-logic/chat/getOneChat";

const getChat: Router = Router();

getChat.get("/:id",verifyToken,  async (req: Request, res: Response) => {

  const chatId=req.params.id;
  const tokenUserId = req.userId;



  if (!tokenUserId){
   res.status(403).json({Message: "Not Authorized"});
  }

  try {

   if (!tokenUserId || !chatId){
   res.status(403).json({Message: "chat id is missing"});
  } else {
    const post = await getOnechat(tokenUserId, chatId)

    res.status(200).json(post);    }

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to create post: ${error}` });
  }
});

export default getChat;