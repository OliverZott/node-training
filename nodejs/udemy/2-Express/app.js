import express from "express";

const app = express();

// Middleware that every request runs through
app.use((req, res, next) => {
    console.log("In first middleware!");
    console.log("Request:", req.method, req.url);
    next(); // allows request to continue to next middleware!
});

app.use((req, res, next) => {
    console.log("In second middleware!");
    res.status(200).json("Thats the response object :)");
});

app.listen(3000);
