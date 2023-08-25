const http = require("http");

function startHealthCheck(port) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("TCP server is up and running");
  });

  server.listen(port, () => {
    console.log(`Health check server started on port ${port}`);
  });
}

module.exports = {
  startHealthCheck,
};
