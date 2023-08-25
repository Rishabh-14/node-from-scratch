const fs = require("fs");
const SimpleNode = require("./SimpleNode");
const { log } = require("./logger");
const { handleServerError } = require("./errorHandler");

const config = JSON.parse(fs.readFileSync("config.json"));

// Corrected the typo from 'consig.host' to 'config.host'
const node = new SimpleNode(config.host, config.port);

process.on("uncaughtException", handleServerError);
process.on("unhandledRejection", handleServerError);

log("Starting Server ...");
node.start();
