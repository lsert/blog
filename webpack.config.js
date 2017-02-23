module.exports = {
    entry: "./src/entry.js",
    output: {
        path: "./dist",
        filename: "bound.min.js"
    },
    module: {
        rules: [
            {
                test: /\.js|jsx/,
                use: "babel-loader",
            },
            {
                test: /\.less/,
                use: ["style-loader", "css-loader","less-loader"]
            }
        ]
    }
}