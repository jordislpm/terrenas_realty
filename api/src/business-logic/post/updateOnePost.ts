import prisma from "src/lib/prisma";
import argon2 from "argon2";

import { Post, updatePostDTO, updateUserDTO } from "src/entities";

export const updateOnePost = async (id: string, post: updatePostDTO, tokenUserId: string): Promise<Post> => {



    try {

        const updatedPost = await prisma.post.update({
            where: { id },
            data: {
                ...post.postData, 
                postDetail: {
                    update: {
                        ...post.postDetail,
                    }
                }
            }
        });

        return updatedPost;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};