const message = [];

function archiveMessage(message) {
  message.push({
    timestamp: new Date().toISOString(),
    message,
  });
}

function getArchivedMessages() {
  return messages;
}

module.exports = {
  archiveMessage,
  getArchivedMessages,
};
