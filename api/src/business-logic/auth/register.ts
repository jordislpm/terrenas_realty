import argon2 from "argon2";
import { createUserDTO, User } from "src/entities";
import prisma from "src/lib/prisma";

export const registerNewUser = async (data: createUserDTO): Promise<User> => {
  const { username, email, password, avatar } = data;

  try {
    // Check if username or email already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: username },
          { email: email },
        ],
      },
    });

    if (existingUser) {
      if (existingUser.username === username) {
        throw new Error("Username is already taken");
      }
      if (existingUser.email === email) {
        throw new Error("Email is already registered");
      }
    }

    // Hashing the password
    const hashedPassword = await argon2.hash(password);

    // Creating the new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        avatar,
      },
    });

    const userResponse: User = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      avatar: newUser.avatar,
      password: newUser.password,
      createdAt: newUser.createdAt,
    };

    console.log("New user created:", userResponse);
    return userResponse;
  } catch (error) {
    console.error("Error creating user for debugging:", error);
    throw new Error(error instanceof Error ? error.message : "Failed to create user");
  }
};