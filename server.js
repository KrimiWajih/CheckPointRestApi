const express = require("express");
const { config } = require("./configuration/config");
const CRouter = require("./router/RouterC");
const port = 5000;
const app = express();
app.use(express.json());
config();
app.use("/", CRouter);
app.listen(port , console.log("Server is running"))
