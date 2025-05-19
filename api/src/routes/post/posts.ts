import { Request, Response, Router } from "express";
import { getAllPosts} from "src/business-logic";


const getPosts: Router = Router();

getPosts.get("/", async (req: Request, res: Response) => {
  try {
    const users = await getAllPosts();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to get Users: ${error}` });
  }
});

export default getPosts;