const fs = require("fs").promises;

class FileHandler {
  async readFile(filePath) {
    try {
      return await fs.readFile(filePath, "utf8");
    } catch (error) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
  }

  async writeFile(filePath, data) {
    try {
      await fs.writeFile(filePath, data, "utf8");
    } catch (error) {
      throw new Error(`Failed to write to file: ${error.message}`);
    }
  }
}

module.exports = FileHandler;
