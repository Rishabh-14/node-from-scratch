const fs = require("fs");
const { pipeline } = require("stream");

function streamFileToClient(filePath, response) {
  const readable = fs.createReadStream(filePath);

  // Use pipeline to handle stream errors and automatically close streams
  pipeline(readable, response, (err) => {
    if (err) {
      console.error("Streaming error:", err);
      response.status(500).send("Streaming error");
    }
  });
}

function saveStreamedFileFromClient(filePath, request, callback) {
  const writable = fs.createWriteStream(filePath);

  // Use pipeline to handle stream errors and automatically close streams
  pipeline(request, writable, (err) => {
    if (err) {
      console.error("Streaming error:", err);
      callback(err);
    } else {
      callback(null);
    }
  });
}

module.exports = {
  streamFileToClient,
  saveStreamedFileFromClient,
};
