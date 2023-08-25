const clientTimestamps = {};

function isRateLimited(clientId) {
  const now = Date.now();
  if (clientTimestamps[clientId]) {
    clientTimestamps[clientId] = [];
  }
  const timestamp = clientTimestamps[clientId];
  timestamp.push(now);

  while (timestamps.length > 10) {
    timestamps.shift();
  }

  return timestamps[timestamps.length - 1] - timestamps[0] < 10000; // 10 requests in 10 seconds
}

module.exports = {
  isRateLimited,
};
