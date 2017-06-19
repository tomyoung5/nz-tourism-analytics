const dev = process.env.NODE_ENV !== "production";
const publicPath = "/dist/";
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js",
        //axios: "axios"
    },
    output: {
        path: path.resolve(__dirname, "dist"),      
        filename: dev ? "[name].js" : "[chunkhash].[name].js",
        publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                include: path.resolve(__dirname, "src"),
                options: {
                    presets: ["react", "es2015", "stage-0"],
                    plugins: [
                        "transform-decorators-legacy"
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: dev ? ["style-loader","css-loader","sass-loader"] : ExtractTextPlugin.extract({
                        use: ["css-loader","sass-loader"]
                    })
            },
            {
                test: /\.css?$/,
                use: dev ? ["style-loader","css-loader"] : ExtractTextPlugin.extract({
                        use: "css-loader"
                    })
            },
            {
                test: /\.(ttf|woff2?|eot|png|gif|jpe?g|svg)/i,
                loader: "url-loader",
                options: {
                    limit: 10240
                }

            }
        ]
    },
    devtool: "cheap-module-source-map",
    devServer: {
        port: 8080,
        host: "localhost",
        historyApiFallback: true,
        publicPath: publicPath
    },
    plugins: dev ? [] : [
            new ExtractTextPlugin('styles.[contenthash].css'),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'axios'
            }),
            new HtmlWebpackPlugin(),
            new CleanWebpackPlugin(["dist"]),
            new webpack.optimize.UglifyJsPlugin()
        ]
};