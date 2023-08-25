const { generateMetrics } = require("./metricsGenerator");

function processCommand(command) {
  switch (command.toLowerCase()) {
    case "get_metrics":
      return JSON.stringify(generateMetrics());
    case "get_status":
      return "Server is running successfully";
    default:
      return "Unknown command";
  }
}

module.exports = {
  processCommand,
};
