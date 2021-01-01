'use strict'

const path = require('path')
const webpack = require('webpack')

// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')

const utils = require('./utils.js')

module.exports = {
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js',
            '@': utils.resolve('src')
        },
        extensions: ['.js', '.vue', '.json', '.less', '.sass', '.css']
    },

    // 打包入口
    entry: {
        main: './src/main.js',
        vendor: ['vue', 'vue-router', 'vuex']
    },
    // 打包出口
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[name].chunk.js'
    },
    // 打包规则
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            { test: /\.vue$/, loader: 'vue-loader' },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 2048
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // 插件
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin()
    ]
}
