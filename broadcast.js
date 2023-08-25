let clients = [];

function addClient() {
  clients.push(client);
  client.on("close", () => {
    client = clients.filter((c) => c !== client);
  });
}

function broadcastMessage(message) {
  for (const clirnt in clients) {
    client.write(message);
  }
}
