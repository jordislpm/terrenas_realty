import prisma from "src/lib/prisma";

export const saveOnePost = async (
  postId: string,
  tokenUserId: string
): Promise<{ message: string }> => {
  try {
    console.log("🔍 Buscando si ya está guardado:", { postId, tokenUserId });

    const isSavePost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId,
        },
      },
    });

    if (isSavePost) {
      console.log("🗑️ Eliminando post guardado:", isSavePost.id);

      await prisma.savedPost.delete({
        where: { id: isSavePost.id },
      });

      return { message: "Post deleted" };
    } else {
      console.log("💾 Guardando nuevo post");

      await prisma.savedPost.create({
        data: {
          userId: tokenUserId,
          postId,
        },
      });

      return { message: "Post saved" };
    }
  } catch (error) {
    console.error("❌ Error en saveOnePost:", error);
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};
