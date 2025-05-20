import prisma from "src/lib/prisma";
import argon2 from "argon2";

import { createPostDTO, Post} from "src/entities";

export const createNewPost = async (id: string, post:createPostDTO ): Promise<Post> => {
  try {
    const newPost = await prisma.post.create({
       data: {
        ...post.postData,
        userId: id,
        postDetail: {
          create: post.postDetail,
        },
      },
    });

    return newPost;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};