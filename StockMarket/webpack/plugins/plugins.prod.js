const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const WebpackBar = require('webpackbar');
const DefinePlugin = require('webpack').DefinePlugin;

module.exports = [new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    // favicon: 'favicon.ico'
}),
new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
}),
new WebpackBar(),
new DefinePlugin({
    'IS_DEV': JSON.stringify("false"),
    // 'API_URL': JSON.stringify("http://ictlab.usil.edu.pe/bolsa/api"),
    // 'SOCKET_URL': JSON.stringify("http://ictlab.usil.edu.pe/bolsa/socket")
    'API_URL': JSON.stringify("http://54.245.43.104:5015/graph"),
    'SOCKET_URL': JSON.stringify("http://54.245.43.104:5020")
}),
new CompressionPlugin({
    // asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
    threshold: 8000,
    minRatio: 0.8
})]

