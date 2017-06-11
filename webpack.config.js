const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    inject: 'body'
})

module.exports = {
    devtool: 'source-map',
    entry: {
        'app': [
            'react-hot-loader/patch',
            './src/index'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },

    plugins: [
        HtmlWebpackPluginConfig
    ]

}
