import { Request, Response, Router } from "express";
import { getAllPosts} from "src/business-logic";


const getPosts: Router = Router();

getPosts.get("/", async (req: Request, res: Response) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to get Posts: ${error}` });
  }
});

export default getPosts;