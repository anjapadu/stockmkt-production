const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: ['./index'],
    // watch: true,
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // new webpack.BannerPlugin({
        //     banner: 'require("source-map-support").install();',
        //     raw: true,
        //     entryOnly: false
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

    ],
    output: { path: path.join(__dirname, 'dist'), filename: 'server.js' }
};