var Webpack = require( 'webpack' );
var Path = require( 'path' );
var CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = {
    devtool: "inline-sourcemap",
    entry: Path.join( __dirname, "src", "Video.js" ),
    output: {
        path: Path.join( __dirname, "dist", "components" ),
        filename: "Video.js"
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
            }
        ]
    },
    plugins: [
        new Webpack.optimize.DedupePlugin(),
        new Webpack.optimize.OccurenceOrderPlugin(),
        new Webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
};
