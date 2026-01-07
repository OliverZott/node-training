const requestHandler = (req, res) => {
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
            if (!parsedBody) return res.end("No body");

            setTimeout(() => {
                console.log("Timer is done!");
            }, 2000);
            console.log(`Parsed body: ${parsedBody}`);
            res.statusCode = 200;
            res.write("Data endpoint\n");
            res.end();
        });
        return;
    }

    console.log(req.url, req.method, req.headers);
    res.setHeader("Content-Type", "text/html");
    res.write("Hello World!");
    res.end();
};

export default requestHandler;
