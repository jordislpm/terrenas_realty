import argon2 from "argon2";
import prisma from "src/lib/prisma";
import {updateUserDTO, User } from "src/entities";



export const updateOneUser = async (id: string, user: updateUserDTO): Promise<User> => {

const {password, avatar, ...inputs}=user;

let updatedPassword =  null


  try {

    if (password){
        updatedPassword = await argon2.hash(password);
    }
       const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPassword && {password: updatedPassword}),
        ...(avatar && {avatar})
      }
    });

    if (!user) {
      throw new Error("User not found");
    }

    return updatedUser;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};