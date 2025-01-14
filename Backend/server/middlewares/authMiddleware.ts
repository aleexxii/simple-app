import { Request, Response, NextFunction } from "express";
import Jwt  from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];
  //x-auth-token

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const verified = Jwt.verify(token, process.env.JWT_SECRET!);
    // req.body.user = verified;
    (req as any).user = verified;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = (req as any).user;

  if (user.role !== "admin") {
    return res.status(403).json({ message: "You are not authorized to access this route" });
  }

  next();
}