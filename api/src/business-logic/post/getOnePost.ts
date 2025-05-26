import prisma from "src/lib/prisma";
import {Post} from "src/entities";


export const getOnePost = async (id:string|undefined): Promise<Post> => {

  try {
       const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};