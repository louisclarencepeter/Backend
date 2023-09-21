import express from "express";
import dotenv from "dotenv";

const app = express();

app.use(express.json());

app.listen(3001, (req, res) => {
  console.log("Server is running on port 3001");
});

