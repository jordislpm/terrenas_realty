import { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ShouldBeAdmin } from "src/entities";

dotenv.config();

interface CustomJwtPayload extends JwtPayload {
  isAdmin: boolean;
}

export const shouldBeAdmin = async (token: string): Promise<ShouldBeAdmin> => {
  if (!token) {
    throw new Error("Not Authenticated!");
  }

  const jwtSecret = process.env.JWT_SECRET_KEY;
  if (!jwtSecret) {
    throw new Error("JWT secret not configured!");
  }
  try {
    const decoded = jwt.verify(token, jwtSecret) as CustomJwtPayload;

    if (!decoded.isAdmin) {
      throw new Error("Not authorized!");
    }

    return {
      validated: true,
      message: "You are Authenticated as Admin"
    };

  } catch (error) {
    throw new Error("Token is invalid or unauthorized");
  }
};