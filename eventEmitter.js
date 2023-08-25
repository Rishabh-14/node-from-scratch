const events = require("events");

class ServerEventEmitter extends events.EventEmitter {
  constructor() {
    super();
  }
}

module.exports = new ServerEventEmitter();
