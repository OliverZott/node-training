import express from "express";
import path from "path";

import { __dirname } from "../utils/path.js";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.status(200).json("Product created");
});

export default router;
