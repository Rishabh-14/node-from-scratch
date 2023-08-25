const { broadCastMessage } = require("./broadCastManager");
let intervalId;

function startNotification(interval = 6000) {
  intervalId = setInterval(() => {
    const message = `Server Notification: This is a regular server update at ${new Date().toISOString()}`;
    broadcastMessage(message);
  }, interval);
}

function stopNotifications() {
  clearInterval(intervalId);
}

module.exports = {
  startNotifications,
  stopNotifications,
};
