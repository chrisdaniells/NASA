var webpack = require('webpack');
var path = require('path');

const PATHS = {
    app: './src/js/app.js',
    dist: path.join(__dirname, './dist/js')
};

module.exports = {
    devtool: 'inline-sourcemap',
    context: __dirname,
    entry: PATHS.app,
    output: {
        path:  PATHS.dist,
        filename: 'app.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};