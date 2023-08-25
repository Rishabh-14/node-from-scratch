const net = require("net");
const handleClient = require("./clientHandler");

class SimpleNode {
  constructor(host, port) {
    this.host = host;
    this.port = port;
  }

  start() {
    const server = net.createServer((client) => {
      handleClient(client);
    });

    server.listen(this.port, this.host, () => {
      console.log(`Server started at ${this.host}:${this.port}`);
    });
  }
}

module.exports = SimpleNode;
