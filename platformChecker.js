function isWindows() {
  return process.platform === "win32";
}

function isMac() {
  return process.platform === "darwin";
}

function isLinux() {
  return process.platform !== "win32" && process.platform !== "darwin";
}

module.exports = {
  isWindows,
  isMac,
  isLinux,
};
