const startTime = new Date();

function getUptime() {
  const currentTime = new Date();
  return (currentTime - startTime) / 1000; // uptime in seconds
}

module.exports = {
  getUptime,
};
