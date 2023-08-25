const net = require("net");
const SimpleNode = require("./SimpleNode");
const ConnectionTracker = require("./ConnectionTracker");
const BufferedHandler = require("./BufferedHandler");
const Logger = require("./Logger");
const ClientManager = require("./ClientManager");
const Config = require("./Config");
const RequestParser = require("./RequestParser");
const ResponseHandler = require("./ResponseHandler");
const Metrics = require("./Metrics");

class ImprovedNode extends SimpleNode {
  constructor(host, port, maxConnections) {
    super(host, port);
    this.connectionTracker = new ConnectionTracker(maxConnections);
    this.logger = Logger;
    this.requestParser = new RequestParser();
    this.responseHandler = new ResponseHandler();
    this.clientManager = new ClientManager(
      new BufferedHandler(),
      this.logger,
      this.requestParser,
      this.responseHandler,
      Metrics
    );
  }

  start() {
    this.logger.log("Starting the improved server...");
    super.start();
  }

  handleClient(client) {
    if (!this.connectionTracker.addConnection()) {
      this.logger.log("Too many connections. Closing new client.");
      return client.end();
    }
    this.logger.log(
      `New client connected. Active connections: ${this.connectionTracker.getActiveConnections()}`
    );
    this.clientManager.handle(client);
  }
}

// Testing the ImprovedNode
const node = new ImprovedNode(Config.host, Config.port, Config.maxConnections);
node.start();
