module.exports = {
    // Loads polyfill before loading main.js
    entry: ['@babel/polyfill', './src/main.js'], // what is your main javascript file?
    output: { // where should I send my converted ES6+ code?
        path: __dirname + '/public', // refers to the directory where webpack.config.js is located
        filename: 'bundle.js',
    },
    devServer: { 
        contentBase: __dirname + '/public' // Where should the app server be loaded from?
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },
};