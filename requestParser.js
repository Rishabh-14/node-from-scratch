class RequestParser {
  parse(data) {
    const [type, content] = data.split(":").map((str) => str.trim());
    return { type, content };
  }
}

module.exports = RequestParser;
