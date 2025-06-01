import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "src/lib/prisma";
import { Chat, GetPostsQuery, Post } from "src/entities";


export const addNewMessage = async (tokenUserId: string): Promise<Chat[]> => {

    const jwtSecret = process.env.JWT_SECRET_KEY || "";


    try {
        const chats = await prisma.chat.findMany({
            where: {
                userIDs: {
                    hasSome: [tokenUserId]
                }
            },
        });

        return chats;

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};