
import { Request, Response, Router } from "express";
import { getOnePost} from "src/business-logic";
import { verifyToken } from "src/middleware/verifyToken";



const getPost: Router = Router();

getPost.get("/:id",verifyToken,  async (req: Request, res: Response) => {

  const id=req.params.id
  const body = req.body;


  try {
    const user = await getOnePost(body.id)
    res.status(200).json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to get a post: ${error}` });
  }
});

export default getPost;