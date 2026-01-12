import express from "express";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("In first middleware!");
    next();
});

// Middleware that every request runs through
app.post("/product", (req, res, next) => {
    console.log("Request:", req.method, req.url);
    console.log(req.body);
    next(); // allows request to continue to next middleware!
});

app.use("/", (req, res, next) => {
    console.log("In second middleware!");
    res.status(200).json("Thats the response object :)");
});

app.listen(3000);
