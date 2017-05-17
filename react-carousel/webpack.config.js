/**
 * Created by xingxiao05 on 17/5/17.
 */
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: ['react','react-dom']
    },

    output: {
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname + '/dist'),
        publicPath: "/assert"
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [ 'babel-loader', ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader?modules', ],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]'
                }
            }
        ],
    }

}