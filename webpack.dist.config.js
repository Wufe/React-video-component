var Webpack = require( 'webpack' );
var Path = require( 'path' );
var CopyWebpackPlugin = require( 'copy-webpack-plugin' );
var externals = require( 'webpack-node-externals' );

module.exports = {
    entry: {
        video: Path.join( __dirname, "src", "video.js" )
    },
    output: {
        path: Path.join( __dirname, "dist", "components" ),
        filename: "[name].js",
        libraryTarget: 'umd'
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
        new Webpack.optimize.DedupePlugin(),
        new Webpack.optimize.OccurenceOrderPlugin(),
        new Webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],
    externals: [ externals() ]
};
