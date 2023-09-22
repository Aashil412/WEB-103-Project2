import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import data from "../data/creators.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(data);
});

router.get("/:giftId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/careers.html"));
});

export default router;
