const fs = require("fs");
const SimpleNode = require("./SimpleNode");
const { log } = require("./logger");
const { handleServerError } = require("./errorHandler");
const { startHealthCheck } = require("./healthCheck");
const { incrementClientCount, getClientCount } = require("./metrics");

const config = JSON.parse(fs.readFileSync("config.json"));

// Corrected the typo from 'consig.host' to 'config.host'
const node = new SimpleNode(config.host, config.port);

process.on("uncaughtException", handleServerError);
process.on("unhandledRejection", handleServerError);

log("Starting Server ...");
node.start();

startHealthCheck(3000);

// Inside the client handler in SimpleNode, add:
incrementClientCount();

// If you want to print the number of clients connected, anywhere in your code, you can use:
console.log(getClientCount());
client.write(JSON.stringify(generateMetrics()));
