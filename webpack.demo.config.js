var Webpack = require( 'webpack' );
var Path = require( 'path' );
var CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = {
    devtool: "inline-sourcemap",
    entry: Path.join( __dirname, "demo", "app", "index.js" ),
    output: {
        path: Path.join( __dirname, "demo", "assets", "js" ),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/i,
                exclude: /(node_modules|bower_components)/i,
                loader: 'babel-loader',
                query: {
                    presets: [ 'react', 'es2015', 'stage-0' ],
                    plugins: [ 'react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy' ]
                }
            },
            {
                test: /\.css$/i,
                loader: 'style!css!'
            },
            {
                test: /\.s(a|c)ss$/i,
                loader: 'style!css!sass!'
            }
        ]
    },
    plugins: [

    ]
};
