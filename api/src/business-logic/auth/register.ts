import argon2 from "argon2";
import { createUserDTO, User } from "src/entities";
import prisma from "src/lib/prisma";

export const registerNewUser = async (data: createUserDTO): Promise<User | Error> => {
    console.log("logic for creating new user is working");
    const { username, email, password, avatar } = data;

    // Hashing the password
    const hashedPassword = await argon2.hash(password);

    // Creating the new user
    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        },
    });


    // Formatting the response
    const userResponse: User = {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar,
        password: newUser.password,
        createdAt: newUser.createdAr, // Changed from createdAr to createdAt
    };

    return userResponse;
};
