import "./config/environment.js";
import http from "http";
import app from "./app.js";
import { initSockets } from "./sockets/index.js";
import { env } from "./config/environment.js";
import "./jobs/syncExternalServersJob.js";
import "./jobs/expireListingsJob.js";
import "./jobs/refreshServerStatsJob.js";
const server=http.createServer(app);initSockets(server);server.listen(env.port,()=>console.log(`Rustport API running on ${env.apiUrl}`));
