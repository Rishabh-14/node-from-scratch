class ConnectionTracker {
  constructor(maxConnection) {
    this.activeConnections = activeConnections;
    this.maxConnection = maxConnection;
  }
  addConnection() {
    if (this.activeConnections < this.maxConnection) {
      this.activeConnections++;
      return true;
    }
    return false;
  }

  removeConnection() {
    this.activeConnections--;
  }

  getActiveConnections() {
    return this.activeConnections;
  }
}

module.exports = ConnectionTracker;
