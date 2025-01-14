import "dotenv/config";
import express from "express";
import connectDB from "./server/config/db";
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hy! Good morning");
});

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});