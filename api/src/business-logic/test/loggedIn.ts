
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import dotenv from "dotenv";
import { ShouldBeAdmin } from "src/entities";

dotenv.config();

interface CustomJwtPayload extends JwtPayload {
  isAdmin: boolean;
}

export const shouldBeLoggedIn = async (token: string): Promise<ShouldBeAdmin> => {
 const jwtSecret = process.env.JWT_SECRET_KEY || "";

  try {
    const payload = jwt.verify(token, jwtSecret) as CustomJwtPayload;
    console.log("Token payload:", payload);
    // if (!payload.isAdmin) {
    //   throw new Error("Not authorized!");
    // }

    return {
      message: "You are Authenticated",
      validated: true,
    };
  } catch (error) {
    console.error("JWT Verification Error:", error);
    throw new Error("Token is not Valid or not authorized!");
  }
};