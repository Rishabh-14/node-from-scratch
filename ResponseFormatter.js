class ResponseFormatter {
  success(data) {
    return {
      status: "success",
      data: data,
    };
  }

  error(errorMessage) {
    return {
      status: "error",
      message: errorMessage,
    };
  }
}

module.exports = new ResponseFormatter();
