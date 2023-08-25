class ImprovedAPIRouter {
  constructor() {
    this.routes = {};
  }

  // Register a route with a specific HTTP method
  register(method, path, handler, middleware = []) {
    method = method.toUpperCase();
    if (!this.routes[method]) {
      this.routes[method] = {};
    }

    if (this.routes[method][path]) {
      throw new Error(`Route [${method} ${path}] is already registered.`);
    }

    this.routes[method][path] = {
      handler: handler,
      middleware: middleware,
    };
  }

  async route(request) {
    const method = request.method.toUpperCase();
    const routeInfo = this.routes[method] && this.routes[method][request.path];

    if (!routeInfo) {
      return {
        status: 404,
        body: "Not Found",
      };
    }

    // Run middlewares
    for (const mw of routeInfo.middleware) {
      const mwResult = await mw(request);
      if (mwResult) {
        return mwResult; // If middleware returns a result, short-circuit and return it
      }
    }

    // Run main handler
    return await routeInfo.handler(request);
  }
}

module.exports = new ImprovedAPIRouter();
