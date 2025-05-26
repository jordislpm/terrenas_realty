import prisma from "src/lib/prisma";
import {GetPostsQuery, Post} from "src/entities";


export const getAllPosts = async (query: GetPostsQuery): Promise<Post[]> => {
  console.log(query)

  try {
    return await prisma.post.findMany({
  where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || undefined,
          lte: parseInt(query.maxPrice) || undefined,
        },
      },
    });
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};