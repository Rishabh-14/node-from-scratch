class ClientManager {
  constructor(bufferedHandler, logger) {
    this.bufferedHandler = bufferedHandler;
    this.logger = logger;
  }

  handle(client) {
    client.on("data", (data) => {
      const message = this.bufferedHandler.handleData(data);
      if (message) {
        this.logger.log(`Message received: ${message}`);
      }
    });

    client.on("end", () => {
      this.logger.log(`Client disconnected.`);
    });

    client.on("error", (err) => {
      this.logger.error(`Client error: ${err.message}`);
    });
  }
}

module.exports = ClientManager;
