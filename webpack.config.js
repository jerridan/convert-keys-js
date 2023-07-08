const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "convertKeys",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
  mode: "production",
};

module.exports = config;
