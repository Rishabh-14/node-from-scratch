const net = require("net");
const SimpleNode = require("./SimpleNode");
const ConnectionTracker = require("./ConnectionTracker");
const BufferedHandler = require("./BufferedHandler");

class ImprovedNode extends SimpleNode {
  constructor(host, port, maxConnections = 10) {
    super(host, port);
    this.connectionTracker = new ConnectionTracker(maxConnections);
  }

  start() {
    console.log("Starting the improved server...");
    super.start();
  }

  handleClient(client) {
    if (!this.connectionTracker.addConnection()) {
      console.log("Too many connections. Closing new client.");
      return client.end();
    }

    console.log(
      `New client connected. Active connections: ${this.connectionTracker.getActiveConnections()}`
    );

    const bufferedHandler = new BufferedHandler();

    client.on("data", (data) => {
      const message = bufferedHandler.handleData(data);
      if (message) {
        console.log(`Message received: ${message}`);
      }
    });

    client.on("end", () => {
      this.connectionTracker.removeConnection();
      console.log(
        `Client disconnected. Active connections: ${this.connectionTracker.getActiveConnections()}`
      );
    });

    client.on("error", (err) => {
      console.error(`Client error: ${err.message}`);
    });
  }
}

// Testing the ImprovedNode
const node = new ImprovedNode("127.0.0.1", 8080);
node.start();
