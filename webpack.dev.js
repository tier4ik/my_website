const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        projects: './src/js/projects.js',
        links: './src/js/links.js'
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
            template: './src/pug_templates/welcome.pug',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'projects.html',
            template: './src/pug_templates/projects.pug',
            chunks: ['projects']
        }),
        new HtmlWebpackPlugin({
            filename: 'links.html',
            template: './src/pug_templates/links.pug',
            chunks: ['links']
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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
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