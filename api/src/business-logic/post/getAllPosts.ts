import prisma from "src/lib/prisma";
import {Post} from "src/entities";


export const getAllPosts = async (): Promise<Post[]> => {
  try {
    return await prisma.post.findMany();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};