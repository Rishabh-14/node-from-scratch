function normalizeEndings(content) {
  return content.replace(/\r\n/g, "\n");
}

module.exports = {
  normalizeEndings,
};
