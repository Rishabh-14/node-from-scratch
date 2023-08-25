const loadedPlugins = [];

function loadPlugin(pluginFunction) {
  loadedPlugins.push(pluginFunction);
}

function executePlugins(client) {
  for (plugin of loadedPlugins) {
    plugin(client);
  }
}

module.exports = {
  loadPlugin,
  executePlugins,
};
