let requestCount = 0;
let lastResetTime = Date.now();

function logRequest() {
  requestCount++;
}

function getRPM() {
  const now = Date.now();
  const minutePassed = (now - lastResetTime) / 6000;
  const rpm = request / minutePassed;
  return rpm;
}

function resetCounter() {
  requestCount = 0;
  lastResetTime = Date.now();
}

module.exports = {
  logRequest,
  getRPM,
  resetCounter,
};
