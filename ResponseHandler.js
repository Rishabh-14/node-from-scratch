class ResponseHandler {
  generateResponse(request) {
    if (request.type === "ECHO") {
      return `ECHO RESPONSE: ${request.content}`;
    }
    return "UNKNOWN REQUEST";
  }
}

module.exports = ResponseHandler;
