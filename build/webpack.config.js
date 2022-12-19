const { merge } = require("webpack-merge");
const baseConf = require("./webpack.base.config");
const devConf = require("./webpack.dev.config");
const proConf = require("./webpack.pro.config");

const conf = process.NODE_ENV === "development" ? devConf : proConf;

module.exports = merge(baseConf, conf);
