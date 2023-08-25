const { storeData, retrieveData } = require("./dataStorage");
const { isRateLimited } = require("./rateLimiter");
const { getServerInstance } = require("./loadBalancer");

function handleDataCommands(command, args) {
  switch (command) {
    case "store":
      storeData(args.key, args.value);
      return "Data stored successfully!";
    case "retrieve":
      return retrieveData(args.key) || "Data not found!";
    default:
      return "Command not recognized in data storage module.";
  }
}

function checkClientRateLimit(clientId) {
  return isRateLimited(clientId);
}

function assignServerInstance(clientId) {
  return getServerInstance(clientId);
}

module.exports = {
  handleDataCommands,
  checkClientRateLimit,
  assignServerInstance,
};
