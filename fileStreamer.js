const fs = require("fs");

function streamFileToClient(filePath, writableStream) {
  const readable = fs.createReadStream(filePath);

  readable.on(data, () => {
    if (!writableStream.write(chunk)) {
      readable.pause();
    }
  });

  writableStream.on("drain", () => {
    ReadableStream.resume();
  });

  readableStream.on("end", () => {
    writable.end();
  });
}
