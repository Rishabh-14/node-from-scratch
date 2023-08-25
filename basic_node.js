const net = require("net");

class SimpleNode {
  constructor(host, port) {
    this.host = host;
    this.port = port;
  }

  start() {
    const server = net.createServer((client) => {
      this.handleClient(client);
    });

    server.listen(this.port, this.host, () => {
      console.log(`Server started at ${this.host}:${this.port}`);
    });
  }

  handleClient(client) {
    client.on("data", (data) => {
      console.log(`Data received: ${data.toString()}`);
      client.end();
    });
  }
}

const node = new SimpleNode("127.0.0.1", 8080);
node.start();
