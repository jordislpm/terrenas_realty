
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import dotenv from "dotenv";
import { ShouldBeAdmin } from "src/entities";
import { Request, Response } from "express";

dotenv.config();

interface CustomJwtPayload extends JwtPayload {
  isAdmin: boolean;
}

export const shouldBeLoggedIn = (req: Request, res: Response): void => {
  // Optionally check req.userId
  res.status(200).json({ message: "You are authenticated as admin" });
};