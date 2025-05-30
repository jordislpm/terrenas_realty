import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "src/lib/prisma";
import { Post } from "src/entities";


export const getOnePost = async (id: string | undefined, token: string): Promise<Post> => {

  const jwtSecret = process.env.JWT_SECRET_KEY || "";


   if (!id) {
      throw new Error("PostId is undefined");
    }

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


    let userId;

    console.log("token", token)

    if (!token) {
      userId = null;
    } else {
      const payload = jwt.verify(token, jwtSecret);

      console.log("payload", payload)

      if (!payload || typeof payload === "string") {
        userId = null
      } else {
        userId = payload.id
      }
    }

    console.log("userId", userId)

    const saved = await prisma.savedPost.findUnique({
            where: {
              userId_postId: {
                postId: id,
                userId: userId,
              },
            },
          });

    console.log("saved:",saved)
    return {...post, isSaved: saved ? true: false};
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};