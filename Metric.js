class Metrics {
  constructor() {
    this.totalRequests = 0;
  }

  incrementRequests() {
    this.totalRequests++;
  }

  getTotalRequests() {
    return this.totalRequests;
  }
}

module.exports = new Metrics();
