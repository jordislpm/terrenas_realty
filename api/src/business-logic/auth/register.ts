import argon2 from "argon2";
import { createUserDTO, User } from "src/entities"
import prisma from "src/lib/prisma";


export const registerNewUser = async (data: createUserDTO): Promise<User | Error> => {

    const { username, email, password, avatar } = data;

    async function hashPassword(password: string): Promise<string> {
        try {
            const hash = await argon2.hash(password);
            return hash;
        } catch (err) {
            console.error('Error hashing password:', err);
            throw err;
        }
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword
        }
    })
    console.log(newUser.createdAr);
    const userResponse: User = {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar,
        password: newUser.password,
        createdAt: newUser.createdAr,
    };
    return userResponse;
}
