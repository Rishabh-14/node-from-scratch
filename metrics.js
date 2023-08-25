let clientCount = 0;

function incrementClientCount() {
  clientCount += 1;
}

function getClientCount() {
  return clientCount;
}

module.exports = {
  incrementClientCount,
  getClientCount,
};
