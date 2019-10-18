module.exports = {
    entry: './main.js', // what is your main javascript file?
    output: { // where should I send my converted ES6+ code?
        path: __dirname, // refers to the directory where webpack.config.js is located
        filename: 'bundle.js',
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