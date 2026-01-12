import express from "express";
import bodyParser from "body-parser";

import todosRoutes from "./routes/todos.js";

const app = express();

app.use(bodyParser.json());
app.use(todosRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
