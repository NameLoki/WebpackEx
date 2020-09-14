const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./index.jsx",
    output: {
        filename: "bundle.js",
        path:path.resolve(__dirname + "/build"),
    },
    mode: "none",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude:"/node_modules",
                use:['babel-loader'],
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader", // 로더는 js파일이 아닌 파일을 웹팩이 이해할 수 있게 해줌
                        options:{
                            minimize: true, // 코드 최적화 true는 코드를 한줄로 표시해줌
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader , 'css-loader']
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html', // 해당 경로의 파일을 읽음
            filename: 'index.html' // output출력 파일
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ]
};