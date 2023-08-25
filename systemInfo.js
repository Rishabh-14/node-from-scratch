const os = require("os");

function getSystemInfo() {
  return {
    platform: os.platform(),
    cpuCores: os.cpus().length,
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    uptime: os.uptime(),
  };
}

module.exports = {
  getSystemInfo,
};
