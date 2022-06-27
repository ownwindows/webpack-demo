const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' +
    '' )

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve( __dirname, 'dist' ),
    },
};