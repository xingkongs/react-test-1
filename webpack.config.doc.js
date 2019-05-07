const path = require("path");
const base = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = Object.assign({}, base, {
    mode: "production",
    entry: {
        example: "./example.tsx"
    },
    output: {
        path: path.resolve(__dirname, "doc"),
        library: "xrui",
        libraryTarget: "umd"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "xrUI",
            template: "example.html"
        })
    ]
});