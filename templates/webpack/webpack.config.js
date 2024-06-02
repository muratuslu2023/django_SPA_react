const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry:"./src/main.js",
    mode:"development",
    devtool:"inline-source-map",
    output:{

        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].js",
        chunkFilename:"js/components/[name].[contenthash].bundle.js",
        clean:true,
    },
    resolve:{
        extensions:[".js",".jsx"]
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                loader:"file-loader",
                options:{
                    name:"img/[name].[ext]",
                }

              },
            
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:"css/[name].css",
            chunkFilename:"css/[id].css",
        })
    ],
    /* optimization:{
        splitChunks:{
            chunks:"all"
        }
    } */
}

/* optimization: {
    splitChunks: {
      chunks: 'all',
    },
}, */