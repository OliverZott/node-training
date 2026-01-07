// const http = require("http");
import http, { request } from "http";

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("Welcome to the homepage");
        return res.end();
    }

    // Redirect example
    if (url === "/test" && method === "GET") {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.write("You have reached the message endpoint");
        return res.end();
    }

    // POST with body parsing example
    if (url === "/data" && method === "POST") {
        const body = [];

        req.on("data", chunk => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(`Parsed body: ${parsedBody}`);
            res.write("You have reached the data endpoints end");
        });
        res.statusCode = 200;
        res.write("Some data received");
        return res.end();
    }

    console.log(req.url, req.method, req.headers);
    res.setHeader("Content-Type", "text/html");
    res.write("Hello World!");
    res.end();
});

server.listen(3000);
