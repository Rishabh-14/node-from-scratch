let clients = [];

function registerClient(client) {
  const clientInfo = {
    id: Date.now(), // unique identifier
    address: client.remoteAddress,
    port: client.remotePort,
  };
  clients.push(clientInfo);

  client.on("close", () => {
    clients = clients.filter((c) => c.id !== clientInfo.id);
  });
}

function getActiveClients() {
  return clients;
}

module.exports = {
  registerClient,
  getActiveClients,
};
