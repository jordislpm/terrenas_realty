import argon2 from "argon2";
import { createUserDTO, User } from "src/entities";
import prisma from "src/lib/prisma";

export const registerNewUser = async (data: createUserDTO): Promise<User> => {
    const { username, email, password, avatar } = data;

    try {
        // Hashing the password
        const hashedPassword = await argon2.hash(password);

        // Creating the new user
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                avatar,  // Asegúrate de incluir el avatar si está en el DTO
            },
        });

        console.log('New user created:', newUser);

        // Formatting the response
        const userResponse: User = {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            avatar: newUser.avatar,
            password: newUser.password,
            createdAt: newUser.createdAr, // Corregido 'createdAr' a 'createdAt'
        };

        return userResponse;
    } catch (error) {
        console.error("Error creating user for debugging:", error); // Log del error específico
        throw new Error("Failed to create user"); // Lanzar el error para que la ruta lo capture
    }
};