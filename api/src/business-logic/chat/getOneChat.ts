import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "src/lib/prisma";
import { Chat, GetPostsQuery, Post } from "src/entities";


export const getOnechat = async (tokenUserId: string, chatID: string): Promise<Chat> => {

    const jwtSecret = process.env.JWT_SECRET_KEY || "";

    try {
        const chat = await prisma.chat.findUnique({
            where: {
                id: chatID,
                userIDs: {
                    hasSome: [tokenUserId]
                }
            },
        });

        if (!chat) {
            throw new Error("chat not found");
        }

        return chat;

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};