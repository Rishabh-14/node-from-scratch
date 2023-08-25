const { addClient, broadCastMessage } = require("./broadCastManager");
const { addCommand, getCommandHistory } = require("./commandHistory");
const { getSystemInfo } = require("./systemProvider");

function processExtendedCommands(client, command) {
  addCommand(command);

  switch (command) {
    case "get_system_info":
      return JSON.stringify(getSystemInfo());
    case "get_command_history":
      return JSON.stringify(getCommandHistory());
    default:
      return "Command not recognized in extended module.";
  }
}

function handleNewClient(client) {
  addClient(client);
}

module.exports = {
  processExtendedCommands,
  handleNewClient,
  broadcastMessage,
};
