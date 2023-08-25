function handleClient(client) {
  client.on("data", (data) => {
    console.log(`Data received: ${data.toString()}`);
    client.end();
  });
}

module.exports = handleClient;
