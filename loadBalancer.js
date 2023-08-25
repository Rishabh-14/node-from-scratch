const serverInstances = ["Server-1", "Server-2", "Server-3"]; // Example server instances

function getServerInstance(clientId) {
  // Basic round-robin load balancing for demonstration
  return serverInstances[clientId % serverInstances.length];
}

module.exports = {
  getServerInstance,
};
