class APIRouter {
  constructor() {
    this.routes = {};
  }
  register(type, handler) {
    this.routes[type] = handler;
  }

  route(request) {
    const handler = this.routes[(request, type)];
    if (handler) {
      return handler(request);
    } else {
      throw new Error("Unknown request type");
    }
  }
}

module.exports = new APIRouter();
