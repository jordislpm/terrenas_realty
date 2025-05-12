import argon2 from "argon2";
import { loginUserDTO, User } from "src/entities";
import jwt from "jsonwebtoken";
import prisma from "src/lib/prisma";
import dotenv from 'dotenv';

export const shouldBeAdmin = async (token: string): Promise<{token: string, age: number, user:User}> => {
  dotenv.config();
  const jwtSecret = process.env.JWT_SECRET_KEY;

  if (!token) {
    throw new Error("Not Authenticated!");
  }




  const { username, password } = data;

  const age = 1000 * 60 * 60 * 24 * 7;

  jwt.verify(token, jwtSecret, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not Valid!" });
    if (!payload.isAdmin) {
      return res.status(403).json({ message: "Not authorized!" });
    }
  });

  // Check if the JWT_SECRET is defined
  if (!jwtSecret) {
   
  }

  try {
    // Verificar si el usuario existe
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new Error("User does not exist");
    }

    // Verificar si la contraseña es correcta
    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      throw new Error("Password is incorrect");
    }

    // Generar el token
    const token = jwt.sign(
      {
        id: user.id,
      },
      jwtSecret,
      {expiresIn: age}// JWT_SECRET is now guaranteed to be a string
    );

    return {token, age, user};
  } catch (error) {
    console.error(
      "Error logging user:",
      error instanceof Error ? error.message : "Unknown error"
    );
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};