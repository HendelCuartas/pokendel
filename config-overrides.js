const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      components: path.resolve(__dirname, "src/components"),
      screens: path.resolve(__dirname, "src/screens"),
      styles: path.resolve(__dirname, "src/styles"),
    },
  };
  return config;
};