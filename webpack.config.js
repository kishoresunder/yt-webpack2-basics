var path = require('path');
var webpack = require(
    'webpack'
);
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports ={
    mode:'production',
    watch:true,
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath: '/dist'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    optimization:{
        minimizer:[
            new UglifyJsPlugin()
        ]
    }

};  