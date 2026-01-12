import express from "express";

const router = express.Router();

router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.status(200).json("Product created");
});

router.get("/product", (req, res, next) => {
    res.status(200).json("These are all the products ...");
});

export default router;
