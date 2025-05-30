import prisma from "src/lib/prisma";

import { createPostDTO, Post, SavedPost } from "src/entities";

export const saveOnePost = async (postId: string, tokenUserId: string): Promise<SavedPost> => {

  console.log("saveOnePost", postId, tokenUserId)
  try {
    const isSavePost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId
        }
      }
    });

    if (isSavePost) {
      const savePostDelete = await prisma.savedPost.delete({
        where: {
          id: isSavePost.id
        }
      })
      return savePostDelete
    } else {
      const savePostNew = await prisma.savedPost.create({
        data: {
          userId: tokenUserId,
          postId
        }
      })
      return savePostNew
    }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};