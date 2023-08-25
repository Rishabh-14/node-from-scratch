function getEnvVariable(key, defaultValue) {
  return process.env[key] || defaultValue;
}

module.exports = {
  getEnvVariable,
};
