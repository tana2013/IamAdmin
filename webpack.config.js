const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
    filename: './css/stylesheet.css',
});

module.exports = {
    entry: {
        vendor: './src/js/common.js',
        app: './src/js/app.js',
        page: './src/js/page.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/, use: [{loader: "babel-loader", options: {presets: ['es2015']}}]
            },
            {
                test: /\.s[ac]ss$/, loader: ExtractTextPlugin.extract({
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.sass$/, loader: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                })
            }, {
                test: /\.css/, loader: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                })
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                        publicPath: '../'       // override the default path
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],

            }, {
                test: /\.(jpg|png)/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',

                    }
                }]
            },
        ]
    },
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        }),
        new Webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: 'pooper.js',
            chartjs: 'chart.js'
        }),
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'dashboard.html',
            template: 'src/dashboard.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'page.html',
            template: 'src/page.html',
        }), new HtmlWebpackPlugin({
            filename: 'alert-page.html',
            template: 'src/alert-page.html',
        }), new HtmlWebpackPlugin({
            filename: 'form-page.html',
            template: 'src/form-page.html',

        }), new HtmlWebpackPlugin({
            filename: 'inbox-page.html',
            template: 'src/inbox-page.html',
        }), new HtmlWebpackPlugin({
            filename: 'inbox-create.html',
            template: 'src/inbox-create.html',
            chunks: [
                'vendor', 'page',
            ]
        }), new HtmlWebpackPlugin({
            filename: 'inbox-detail.html',
            template: 'src/inbox-detail.html',
        }), new HtmlWebpackPlugin({
            filename: 'profile.html',
            template: 'src/profile.html',
        }), new HtmlWebpackPlugin({
            filename: 'profile-settings.html',
            template: 'src/profile-settings.html',
        }), new HtmlWebpackPlugin({
            filename: 'chat.html',
            template: 'src/chat-page.html',

        }),
        //   new CleanWebpackPlugin(['dist']),
        // new Webpack.optimize.UglifyJsPlugin({}),

        new CopyWebpackPlugin([
            {
                from: 'node_modules/ckeditor',
                to: 'js/ckeditor',
                toType: 'dir'
            }
        ])
    ],

};