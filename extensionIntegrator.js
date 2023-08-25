const { registerClient, getActiveClients } = require("./clientManager");
const { getUptime } = require("./uptimeTracker");
const { archiveMessage, getArchivedMessages } = require("./messageArchive");

function processServerExtensions(command) {
  switch (command) {
    case "get_active_clients":
      return JSON.stringify(getActiveClients());
    case "get_uptime":
      return `Server uptime: ${getUptime()} seconds`;
    case "get_message_archive":
      return JSON.stringify(getArchivedMessages());
    default:
      return "Command not recognized in server extensions.";
  }
}

function archiveServerMessage(message) {
  archiveMessage(message);
}

module.exports = {
  handleClientRegistration,
  processServerExtensions,
  archiveServerMessage,
};
