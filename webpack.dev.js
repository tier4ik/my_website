const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        welcomePage: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname + '/server/static')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './server/static/',
        host: '192.168.0.233',
        port: 3000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pug_templates/welcome.pug'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.ttf$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts'
                }
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true
                        }
                    }
                ]
            }
        ]
    }
};