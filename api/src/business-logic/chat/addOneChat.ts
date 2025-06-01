import { createChatDTO } from './../../entities/chat/chat/chat.dto';
import prisma from "src/lib/prisma";

import { AddChat, Chat} from "src/entities";

export const addOneChat = async (tokenUserId: string, body:AddChat ): Promise<Chat> => {

  try {
    const newPost = await prisma.chat.create({
       data: {
        userIDs:[tokenUserId, body.receiverId]
      },
    });

    return newPost;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};