const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(--path.dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                type: 'asset/resource',
            }
        ],
    },
};