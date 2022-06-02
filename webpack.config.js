const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path");
const {
  override,
  addWebpackAlias,
  addBundleVisualizer,
  addWebpackPlugin
} = require("customize-cra");

module.exports = {
  webpack: override(
    addWebpackAlias({
      "@": path.resolve(__dirname, "src"),
    }),
    addBundleVisualizer({}, true),
    addWebpackPlugin(new NodePolyfillPlugin({
      excludeAliases: ["console"]
    })),
  ),
  paths: (paths) => {
    paths.appBuild = path.resolve(
      __dirname,
      ".",
      process.env.REACT_APP_OUTPUT_PATH || "build"
    );

    return paths;
  },
};