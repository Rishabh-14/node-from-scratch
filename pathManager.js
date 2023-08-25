const path = require("path");

function createPath(...segments) {
  return path.join(...segments);
}

module.exports = {
  createPath,
};
