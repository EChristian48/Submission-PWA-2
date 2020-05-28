const path = require('path')

module.exports = {
    mode: "production",
    entry: "./js/app.js",
    output: {
        path: path.resolve(__dirname, "js/dist"),
        filename: "app.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    }
}