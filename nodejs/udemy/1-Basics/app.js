// const http = require("http");
import http, { request } from "http";

import requestHandler from "./routes.js";

const server = http.createServer(requestHandler);

server.listen(3000);
