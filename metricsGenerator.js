function generateMetrics() {
  const cpuUsage = (Math.random() * 100).toFixed(2);
  const memoryConsumption = (Math.random() * 16).toFixed(2);
  return {
    cpuUsage: `${cpuUsage}%`,
    memoryConsumption: `${memoryConsumption}GB`,
  };
}

module.exports = {
  generateMetrics,
};
