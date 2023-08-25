function log(message) {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp}: ${message}`);
}

module.exports = {
  log,
};
