const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Todo Webpack',
            template: './src/index.html',
        }),
    ],
    module: { 
        rules: [ 
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'], 
            }
        ],
    }
}