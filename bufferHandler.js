class BufferedHandler {
  constructor() {
    this.dataBuffer = " ";
  }

  handleData(data) {
    this.dataBuffer += data;
    if (this.dataBuffer.includes("\n")) {
      const message = this.dataBuffer.trim();
      this.dataBuffer = "";
      return message;
    }
    return null;
  }
}

module.exports = BufferedHandler;
