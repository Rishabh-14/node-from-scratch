const { createSession, getSession } = require("./sessionManager");
const { addTask } = require("./taskQueue");
const { getConfig, setConfig } = require("./configManager");
const { loadPlugin, executePlugins } = require("./pluginLoader");

function initiateClientSession(clientId) {
  return createSession(clientId);
}

function fetchClientSession(clientId) {
  return getSession(clientId);
}

function queueTask(taskFunction) {
  addTask(taskFunction);
}

function fetchConfig(key) {
  return getConfig(key);
}

function updateConfig(key, value) {
  setConfig(key, value);
}

function addPlugin(pluginFunction) {
  loadPlugin(pluginFunction);
}

function runPluginsForClient(client) {
  executePlugins(client);
}

module.exports = {
  initiateClientSession,
  fetchClientSession,
  queueTask,
  fetchConfig,
  updateConfig,
  addPlugin,
  runPluginsForClient,
};
