const path = require("path");
module.exports = {
    // mode: "production",
    entry: {
        index: "./lib/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "dist/lib"),
        library: "gulu",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader"
            },
            {
                test: /\.s([ac])ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: "xrUI",
    //         template: "example.html"
    //     })
    // ],
    // externals: {
    //     react: {
    //         commonjs: "react",
    //         commonjs2: "react",
    //         amd: "react",
    //         root: "React",
    //     },
    //     "react-dom": {
    //         commonjs: "react-dom",
    //         commonjs2: "react-dom",
    //         amd: "react-dom",
    //         root: "ReactDOM",
    //     },
    // },
};