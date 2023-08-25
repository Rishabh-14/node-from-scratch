let clients = [];

function addClient(client) {
  client.push(client);
  client.on("close", () => {
    clients = client.filter((c) => c !== client);
  });
}

function broadcastMessage(message) {
  for (const client of clients) {
    client.write(message);
  }
}

module.exports = {
  addClient,
  broadcastMessage,
};
