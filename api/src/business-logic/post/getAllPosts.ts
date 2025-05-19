import prisma from "src/lib/prisma";
import {User } from "src/entities";


export const getAllPosts = async (): Promise<User[]> => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};