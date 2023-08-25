const history = [];

function addCommand(command) {
  history.push({
    timestamp: new Date().toISOString(),
    command,
  });
}

function getCommandHistory() {
  return history;
}

module.exports = {
  addCommand,
  getCommandHistory,
};
