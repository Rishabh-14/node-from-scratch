class RequestValidator {
  constructor() {
    this.rules = {};
  }

  setRules(path, validationRules) {
    this.rules[path] = validationRules;
  }

  validate(request) {
    const rulesForPath = this.rules[request.path];
    if (!rulesForPath) return true;

    for (const rule in rulesForPath) {
      if (!rule.validate(request)) {
        return rule.errorMessage;
      }
    }
    return true;
  }
}

module.exports = new RequestValidator();
