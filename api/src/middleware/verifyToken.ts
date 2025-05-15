import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  const jwtSecret = process.env.JWT_SECRET_KEY || "";

  if (!token) {
    return res.status(401).json({ message: "Not Authenticated!" });
  }

  jwt.verify(
    token,
    jwtSecret,
    (err: Error | null, payload: string | JwtPayload | undefined) => {
      if (err || !payload || typeof payload === "string") {
        return res.status(403).json({ message: "Token is not Valid!" });
      }

      req.userId = (payload as JwtPayload).id;
      return next();
    }
  );
};