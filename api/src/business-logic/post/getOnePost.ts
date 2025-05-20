import prisma from "src/lib/prisma";
import {Post} from "src/entities";


export const getOnePost = async (id:string|undefined): Promise<Post> => {

  try {
       const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};