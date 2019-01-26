const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtcractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        projects: './src/js/projects.js',
        links: './src/js/links.js'
    },
    output: {
        filename: 'scripts/[name].[hash].js',
        path: path.resolve(__dirname + '/server/static')
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['server/static']),
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
        new MiniCssExtcractPlugin({
            filename: 'css/[name].css'
        }),
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
                    outputPath: (url, resourcePath, context)=> {
                        if(/pg_images/.test(resourcePath)) {
                            return `images/pages/${url}`;
                        }
                        return `images/${url}`;
                    }                    
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtcractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
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