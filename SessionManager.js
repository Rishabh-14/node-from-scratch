const { v4: uuidv4 } = require("uuid");

class SessionManager {
  constructor() {
    this.sessions = {};
  }

  createSession(clientId) {
    const sessionId = uuidv4();
    this.sessions[sessionId] = { clientId, data: {} };
    return sessionId;
  }

  getSession(sessionId) {
    return this.sessions[sessionId];
  }

  destroySession(sessionId) {
    delete this.sessions[sessionId];
  }
}
