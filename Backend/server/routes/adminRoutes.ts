import express from "express";
import { authMiddleware, adminMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/dashboard", authMiddleware, adminMiddleware, (req, res) => {
  res.status(200).json({ message: "Welcome to the admin dashboard" });
});

export default router;