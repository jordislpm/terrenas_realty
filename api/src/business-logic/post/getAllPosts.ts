import prisma from "src/lib/prisma";
import {GetPostsQuery, Post} from "src/entities";


export const getAllPosts = async (query: GetPostsQuery): Promise<Post[]> => {
  console.log(query)

  try {
    return await prisma.post.findMany();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};