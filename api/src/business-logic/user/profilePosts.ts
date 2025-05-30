import { SavedPost } from './../../../../client/src/types/types';
import prisma from "src/lib/prisma";
import { User } from "src/entities";
import { Post } from "@prisma/client";


export const profilePosts = async (id: string | undefined): Promise<
    {
        userPosts: Post[],
        savedPosts: Post[]
    }

> => {

    console.log("profilePosts ID:", id)
    try {
        const userPosts = await prisma.post.findMany({
            where: { userId: id },
        });


        console.log("userPosts",userPosts)

        const saved = await prisma.savedPost.findMany({
            where: { userId: id },
            include: {
                post: true
            }
        })

            console.log("saved",saved)

        const savedPosts = saved.map(item => item.post)
        return {savedPosts: savedPosts, userPosts: userPosts};
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};