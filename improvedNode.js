const net = require("net");

const SimpleNode = require("./SimpleNode");

class improvedNode extends SimpleNode() {
  constructor(host, port) {
    super(host, port);
  }

  start() {
    console.log("Starting the improved server");
    super.start();
  }

  handleClient(client) {
    client.on("data", (data) => {
      console.log(`Improved data passed ${data}`);
      client.end();
    });
  }
}

const node = improvedNode("127.0.0.1", 8080);
console.log(node);
