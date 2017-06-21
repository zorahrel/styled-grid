const ComponentDirectoryPlugin = require('component-directory-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        'styled-grid': './src/index.js',
        'docs': ['./docs/index.html', './docs/index.js']
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'styledGridSystem'
    },
    resolve: {
        extensions: ['.js'],
        modules: ['src', 'node_modules'],
        plugins: [new ComponentDirectoryPlugin()]
    },
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV'])
    ],
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                exclude: /(node_modules)/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: './dist/',
        historyApiFallback: true
    }
}